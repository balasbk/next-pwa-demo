import React, { useState, useEffect } from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
  TextInput,
} from '@carbon/react';
import { TrashCan } from '@carbon/icons-react'; // Importing the delete icon

const TimeTable = () => {
  const [timeData, setTimeData] = useState([]);
  const [filterValue, setFilterValue] = useState(''); // State for the filter input

  useEffect(() => {
    const data = loadTimeDataFromLocalStorage();
    const formattedData = formatDataForTable(data);
    setTimeData(formattedData);
  }, []);

  const loadTimeDataFromLocalStorage = () => {
    const data = localStorage.getItem('timeData');
    return data ? JSON.parse(data) : {};
  };

  const formatDataForTable = (data) => {
    const formattedData = [];

    // Iterate through each hashed key in localStorage
    Object.entries(data).forEach(([hashedKey, { pageName, keyName, value, validation, message, show }]) => {
      if (show) { // Only include entries with show = true
        formattedData.push({
          id: hashedKey, // Use hashed key as ID
          pageName,      // Use saved pageName
          timeKey: keyName,  // Use saved keyName
          value,
          validation,
          message,
          actions: 'delete'
        });
      }
    });

    return formattedData;
  };

  const deleteEntry = (id) => {
    const updatedData = { ...loadTimeDataFromLocalStorage() };

    if (updatedData[id]) {
      delete updatedData[id]; // Remove the entry
    }

    // Save updated data back to local storage
    localStorage.setItem('timeData', JSON.stringify(updatedData));

    // Update the state to reflect the changes in the UI
    setTimeData(formatDataForTable(updatedData));
  };

  const downloadJson = () => {
    const data = loadTimeDataFromLocalStorage();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'timeData.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const headers = [
    { key: 'pageName', header: 'Page Name' },
    { key: 'timeKey', header: 'Time Key' },
    { key: 'value', header: 'Time Value' },
    { key: 'validation', header: 'Validation Message' },
    { key: 'message', header: 'Message' },
    { key: 'actions', header: 'Actions' }, // New column for delete action
  ];

  // Filter the data based on the filterValue
  const filteredData = timeData.filter((entry) =>
    entry.value.includes(filterValue)
  );

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <TextInput
          id="time-filter"
          labelText="Filter by Time Value"
          placeholder="Enter time value (e.g., 12:34)"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>

      {filteredData.length > 0 ? (
        <TableContainer title="Scheduled Times">
          <DataTable rows={filteredData} headers={headers} isSortable>
            {({
              rows,
              headers,
              getHeaderProps,
              getRowProps,
              getTableProps,
            }) => (
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader key={header.key} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>
                          {cell.value === 'delete' ? (
                            <TrashCan
                              style={{ cursor: 'pointer' }}
                              onClick={() => deleteEntry(row.id)}
                            />
                          ) : (
                            cell.value
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </DataTable>
          <Button onClick={downloadJson} style={{ marginTop: '20px' }}>Download JSON</Button>
        </TableContainer>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default TimeTable;