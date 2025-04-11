import React from 'react';
import { useParams } from 'react-router-dom';

function ImagePage() {
  const { imageName } = useParams(); // Get the image name from URL
  const imageUrl = `/images/${imageName}`; // Dynamically set the image URL

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Explore Image</h1>
      <img 
        src={imageUrl} 
        alt={imageName} 
        style={{ maxWidth: '400px', borderRadius: '10px' }} 
        onError={(e) => e.target.style.display = 'none'} // Hide if image not found
      />
      {!imageName && <p>Image not found.</p>}
    </div>
  );
}

export default ImagePage;
