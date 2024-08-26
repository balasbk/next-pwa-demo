import React, { useState, useEffect } from 'react';
import { Toggle, TimePicker, Button } from '@carbon/react';

const TimeToggle = ({ pageName, keyName }) => {
  const [showTime, setShowTime] = useState(false);
  const [timeValue, setTimeValue] = useState('');

  useEffect(() => {
    // Load the saved state from localStorage
    const savedData = JSON.parse(localStorage.getItem('timeData')) || {};
    if (savedData[pageName] && savedData[pageName][keyName]) {
      setShowTime(savedData[pageName][keyName].show);
      setTimeValue(savedData[pageName][keyName].value);
    }
  }, [pageName, keyName]);

  const saveToLocalStorage = (pageName, data) => {
    try {
      let savedData = JSON.parse(localStorage.getItem('timeData')) || {};
      
      savedData[pageName] = {
        ...savedData[pageName],
        ...data,
      };
      
      localStorage.setItem('timeData', JSON.stringify(savedData));
      console.log('Data saved successfully to local storage!');
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };
  

  const handleToggle = () => {
    setShowTime(!showTime);
  };

  const handleSave = () => {
    const validation = `Validation message for ${keyName} on ${pageName}`;
    const message = `Test message for ${keyName}`;
    
    const data = {
      [keyName]: {
        show: showTime,
        value: timeValue,
        validation,
        message,
      },
    };

    saveToLocalStorage(pageName, data);
  };

  return (
    <div>
      <Toggle
        id={`toggle-${keyName}`}
        labelText={`Show ${keyName} Time Component`}
        onToggle={handleToggle}
        toggled={showTime}
      />
      {showTime && (
        <div>
          <TimePicker
            id={`time-picker-${keyName}`}
            labelText={`Select Time for ${keyName}`}
            value={timeValue}
            onChange={(event) => setTimeValue(event.target.value)}
          />
          <Button onClick={handleSave}>Save</Button>
        </div>
      )}
    </div>
  );
};

export default TimeToggle;
