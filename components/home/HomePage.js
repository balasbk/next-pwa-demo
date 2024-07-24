import { useEffect, useState } from 'react';

const HomePage = () => {
  const [time, setTime] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if the key exists in local storage
    const savedTime = localStorage.getItem('time');
    if (savedTime) {
      setTime(savedTime);
      setMessage(`Saved time: ${savedTime}`);
    }
  }, []);

  const saveTime = () => {
    const currentTime = new Date().toLocaleString();
    localStorage.setItem('time', currentTime);
    setTime(currentTime);
    setMessage(`Saved time: ${currentTime}`);
  };

  return (
    <div>
      <h1>Local Storage Time Example</h1>
      {time ? (
        <p>{message}</p>
      ) : (
        <>
          <p>No time saved in Local Storage.</p>
          <button onClick={saveTime}>Save Current Time</button>
        </>
      )}
    </div>
  );
};

export default HomePage;
