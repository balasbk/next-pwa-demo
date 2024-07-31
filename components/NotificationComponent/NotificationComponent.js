import { useEffect, useState } from 'react';

const NotificationComponent = () => {
  const [subscription, setSubscription] = useState(null);
  const [notificationTime, setNotificationTime] = useState('');
  const [message, setMessage] = useState('');

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
          applicationServerKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
        }).then(sub => {
          setSubscription(sub);
        }).catch(err => console.error('Subscription error:', err));
      });
    }
  }, []);

  const handleSetTime = (time) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notificationTime', time);
    }
    setNotificationTime(time);
  };

  const handleButtonClick = async () => {
    setMessage('please wait for the notification!');
    if (subscription && notificationTime) {
      await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription, notificationTime }),
      });
    }
  };

  return (
    <div>
      <input 
        type="time" 
        value={notificationTime} 
        onChange={(e) => handleSetTime(e.target.value)} 
      />
      <button onClick={handleButtonClick}>Set Notification Time</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NotificationComponent;
