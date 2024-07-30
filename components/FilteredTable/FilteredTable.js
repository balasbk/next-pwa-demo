import React, { useEffect, useState } from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';

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

const formatTime12Hour = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strHours = hours < 10 ? '0' + hours : hours;
  const strMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${strHours}:${strMinutes} ${ampm}`;
};



const FilteredTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notificationSent, setNotificationSent] = useState({});
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('carbonTableData');
    const savedNotifications = localStorage.getItem('notificationSent');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const filteredRows = parsedData.filter((row) => row.toggle);
      setRows(filteredRows);

      if (savedNotifications) {
        setNotificationSent(JSON.parse(savedNotifications));
      }
    }
    setLoading(false);

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

  useEffect(() => {
    if (!loading && subscription) {
      const checkNotifications = setInterval(() => {
        const currentTime = new Date();
        const formattedTime = formatTime12Hour(currentTime);
        const newNotificationSent = { ...notificationSent };
        console.log(formattedTime)
        rows.forEach(row => {
          console.log(row.time+ " " + row.period)
          if (row.time +" "+row.period === formattedTime && !notificationSent[row.id]) {
            // Send notification
            fetch('/api/notification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                subscription,
                title: 'Time to Check',
                body: `It's time to check ${row.name}`,
              }),
            }).then(response => {
              if (response.ok) {
                console.log(`Notification sent for row ID ${row.id}`);
                newNotificationSent[row.id] = true;
              }
            }).catch(err => console.error('Notification error:', err));
          }
        });
  
        setNotificationSent(newNotificationSent);
        localStorage.setItem('notificationSent', JSON.stringify(newNotificationSent));
      }, 5000); // Check every minute
  
      return () => clearInterval(checkNotifications);
    }
  }, [loading, rows, notificationSent, subscription]);
   

  const headers = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'time', header: 'Time' },
    { key: 'status', header: 'Notification Sent' },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (rows.length === 0) {
    return <div>No data available or no toggles are on.</div>;
  }

  return (
    <div>
      <TableContainer title="Filtered Rows with Toggle On">
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader key={header.key}>{header.header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                  {notificationSent[row.id] ? '✅' : '❌'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilteredTable;
