import React, { useState } from 'react';
import { FileUploader, Button, InlineNotification } from '@carbon/react';

const UploadData = () => {
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        // Store the JSON data in local storage
        // Object.keys(jsonData).forEach((key) => {
        //   localStorage.setItem(key, JSON.stringify(jsonData[key]));
        // });
        localStorage.setItem("timeData" , JSON.stringify(jsonData))
        setUploadSuccess(true);
        setUploadMessage('JSON data uploaded successfully!');
      } catch (error) {
        console.error('Failed to parse JSON file:', error);
        setUploadSuccess(false);
        setUploadMessage('Failed to upload JSON data.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload JSON Data</h1>
      <FileUploader
        labelTitle="Upload your JSON file"
        buttonLabel="Add file"
        accept={['.json']}
        onChange={handleFileUpload}
         filenameStatus="edit"
        iconDescription="Delete file"
      />
      {uploadMessage && (
        <InlineNotification
          kind={uploadSuccess ? 'success' : 'error'}
          title={uploadSuccess ? 'Success' : 'Error'}
          subtitle={uploadMessage}
          onClose={() => setUploadMessage('')}
          lowContrast
          style={{ marginTop: '20px' }}
        />
      )}
    </div>
  );
};

export default UploadData;
