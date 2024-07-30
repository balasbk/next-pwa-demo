import React, { useState, useEffect, useRef } from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TimePicker,
  TimePickerSelect,
  SelectItem,
  Toggle
} from 'carbon-components-react';

const initialRows = [
  { id: '1', name: 'Item 1', time: '', period: 'AM', toggle: false },
  { id: '2', name: 'Item 2', time: '', period: 'AM', toggle: false },
];

const CarbonTable = () => {
  const [rows, setRows] = useState(initialRows);
  const [notificationSent, setNotificationSent] = useState({});
  const initialLoad = useRef(true);

  // Load data from local storage
  useEffect(() => {
    if (initialLoad.current) {
      const savedData = localStorage.getItem('carbonTableData');
      if (savedData) {
        setRows(JSON.parse(savedData));
      }
      const savedNotifications = localStorage.getItem('notificationSent');
      if (savedNotifications) {
        setNotificationSent(JSON.parse(savedNotifications));
      }
      initialLoad.current = false;
    }
  }, []);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem('carbonTableData', JSON.stringify(rows));
    localStorage.setItem('notificationSent', JSON.stringify(notificationSent));
  }, [rows, notificationSent]);

  const handleTimeChange = (id, event) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, time: event.target.value } : row
    );
    setRows(updatedRows);

    // Reset notification sent status for the row
    setNotificationSent((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handlePeriodChange = (id, event) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, period: event.target.value } : row
    );
    setRows(updatedRows);

    // Reset notification sent status for the row
    setNotificationSent((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handleToggleChange = (id, event) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, toggle: !row.toggle } : row
    );
    setRows(updatedRows);
  };

  const headers = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'time', header: 'Time' },
    { key: 'toggle', header: 'Toggle' },
  ];

  return (
    <div>
      <TableContainer title="Carbon Table with Time Input and Toggle">
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
                <TableCell>
                  <TimePicker
                    id={`time-picker-${row.id}`}
                    labelText="Select a time"
                    value={row.time}
                    onChange={(e) => handleTimeChange(row.id, e)}
                  />
                  <TimePickerSelect
                    id={`time-picker-select-${row.id}`}
                    labelText="AM/PM"
                    value={row.period}
                    onChange={(e) => handlePeriodChange(row.id, e)}
                  >
                    <SelectItem value="AM" text="AM" />
                    <SelectItem value="PM" text="PM" />
                  </TimePickerSelect>
                </TableCell>
                <TableCell>
                  <Toggle
                    id={`toggle-${row.id}`}
                    labelText="Toggle"
                    labelA="Off"
                    labelB="On"
                    toggled={row.toggle}
                    onToggle={(e) => handleToggleChange(row.id, e)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CarbonTable;
