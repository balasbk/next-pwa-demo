// components/FilteredTable.js

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

const FilteredTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem('carbonTableData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const filteredRows = parsedData.filter((row) => row.toggle);
      setRows(filteredRows);
    }
    setLoading(false);
  }, []);

  const headers = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'time', header: 'Time' },
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilteredTable;
