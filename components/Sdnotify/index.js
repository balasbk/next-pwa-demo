import { useEffect, useState } from 'react';


const base64ToUint8Array = base64 => {
    const padding = '='.repeat((4 - (base64.length % 4)) % 4)
    const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')
  
    const rawData = window.atob(b64)
    const outputArray = new Uint8Array(rawData.length)
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

const NotificationPage = () => {
  const [subscription, setSubscription] = useState(null);
  const [notificationTime, setNotificationTime] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTime = localStorage.getItem('notificationTime');
      if (savedTime) {
        setNotificationTime(savedTime);
      }
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY),
        }).then(sub => {
          setSubscription(sub);
        }).catch(err => console.error('Subscription error:', err));
      });
    }
// Clear interval on component unmount
  }, []);

  const handleSetTime = (time) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notificationTime', time);
    }
    setNotificationTime(time);

    // Clear any existing interval// Check every second for more accuracy
  };

  const sendNotification = async () => {
    if (subscription) {
      await fetch('/api/notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription }),
      });

      if (typeof window !== 'undefined') {
        clearInterval(window.notificationInterval);
        localStorage.removeItem('notificationTime'); // Optional: Remove the notification time from localStorage
      }

      
    }
  };

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      clearInterval(window.notificationInterval);

      window.notificationInterval = setInterval(() => {
        const savedTime = localStorage.getItem('notificationTime');
        const currentTime = new Date();
        
        // Format the current time to HH:MM
        const currentFormattedTime = currentTime.toTimeString().slice(0, 5);
        console.log(currentFormattedTime)
        console.log(savedTime)
        if (savedTime === currentFormattedTime) {
            console.log("time to sent notification")
          sendNotification();
        }
      }, 5000); // Check every second for more accuracy
    }
  };

  return (
    <div>
      <input 
        type="time" 
        value={notificationTime} 
        onChange={(e) => handleSetTime(e.target.value)} 
      />
      <button onClick={handleButtonClick}>Send Notification</button>
    </div>
  );
};

export default NotificationPage;
