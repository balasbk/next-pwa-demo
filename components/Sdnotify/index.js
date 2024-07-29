import { useEffect, useState } from 'react';
import { TimePicker, TimePickerSelect, SelectItem, Button } from 'carbon-components-react';

const base64ToUint8Array = base64 => {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const NotificationPage = () => {
  const [subscription, setSubscription] = useState(null);
  const [notificationTime, setNotificationTime] = useState('');
  const [notificationPeriod, setNotificationPeriod] = useState('AM');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTime = localStorage.getItem('notificationTime');
      const savedPeriod = localStorage.getItem('notificationPeriod');
      if (savedTime) {
        setNotificationTime(savedTime);
      }
      if (savedPeriod) {
        setNotificationPeriod(savedPeriod);
      }
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.getSubscription().then(existingSubscription => {
          if (existingSubscription) {
            setSubscription(existingSubscription);
          } else {
            registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY),
            }).then(newSubscription => {
              setSubscription(newSubscription);
            }).catch(err => console.error('Subscription error:', err));
          }
        });
      });
    }
  }, []);

  const handleSetTime = (time) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notificationTime', time);
    }
    setNotificationTime(time);
  };

  const handleSetPeriod = (period) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notificationPeriod', period);
    }
    setNotificationPeriod(period);
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
        localStorage.removeItem('notificationPeriod'); // Optional: Remove the notification period from localStorage
      }
    }
  };

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      clearInterval(window.notificationInterval);

      window.notificationInterval = setInterval(() => {
        const savedTime = localStorage.getItem('notificationTime');
        const savedPeriod = localStorage.getItem('notificationPeriod');
        const currentTime = new Date();
        
        // Format the current time to HH:MM
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        let period = 'AM';

        if (hours >= 12) {
          period = 'PM';
          hours = hours > 12 ? hours - 12 : hours;
        } else {
          hours = hours === 0 ? 12 : hours;
        }

        const currentFormattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

        console.log(currentFormattedTime, period);
        console.log(savedTime, savedPeriod);
        if (savedTime === currentFormattedTime && savedPeriod === period) {
          console.log("time to send notification");
          sendNotification();
        }
      }, 25000); // Check every second for more accuracy
    }
  };

  return (
    <div>
      <div >
        <TimePicker
          id="notification-time"
          labelText="Select a time"
          value={notificationTime}
          onChange={(e) => handleSetTime(e.target.value)}
        />
        <TimePickerSelect
          id="notification-period"
          labelText="AM/PM"
          value={notificationPeriod}
          onChange={(e) => handleSetPeriod(e.target.value)}
        >
          <SelectItem value="AM" text="AM" />
          <SelectItem value="PM" text="PM" />
        </TimePickerSelect>
      </div>
      <Button onClick={handleButtonClick}>Send Notification</Button>
    </div>
  );
};

export default NotificationPage;
