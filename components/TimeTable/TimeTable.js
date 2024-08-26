import React, { useState, useEffect } from 'react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Button } from '@carbon/react';

const TimeTable = () => {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const data = loadTimeDataFromLocalStorage();
    
    const formattedData = Object.entries(data)
      .flatMap(([pageName, timeObj]) =>
        Object.entries(timeObj)
          .filter(([, { show }]) => show) // Only include entries with show = true
          .map(([timeKey, { value, validation, message }], index) => ({
            id: `${pageName}-${timeKey}-${index}`,
            pageName,
            timeKey,
            value,
            validation,
            message,
          }))
      );
    
    setTimeData(formattedData);
  }, []);

  const loadTimeDataFromLocalStorage = () => {
    const data = localStorage.getItem('timeData');
    return data ? JSON.parse(data) : {};
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
  ];

  return (
    <div>
      {timeData.length > 0 ? (
        <TableContainer title="Scheduled Times">
          <DataTable rows={timeData} headers={headers} isSortable>
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
                        <TableCell key={cell.id}>{cell.value}</TableCell>
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
