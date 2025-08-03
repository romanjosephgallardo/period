import React, { useRef, useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import './ImageUpload.css'

const ImageUpload = ({ onImageUpload, hasImage, uploadedImage }) => {
  const fileInputRef = useRef(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError(''); // Clear previous errors
    
    if (file) {
      // File type validation
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
        return;
      }

      // File size validation (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        setError('File size must be less than 10MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target.result);
      };
      reader.onerror = () => {
        setError('Error reading file. Please try again.');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {!hasImage ? (
        <div
          className="upload-area"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-text-content">
            <PhotoCameraIcon className="camera-icon" />
            <h3>Drop your image here.</h3>
            <p> Click to upload </p>
          </div>
        </div>
      ) : (
        <div className="image-preview">
          <img 
            src={uploadedImage} 
            alt="Uploaded" 
            className="uploaded-image"
          />
          <button
            className="button-secondary"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="button-texts">
              <h6>Change Image</h6>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};


export default ImageUpload;