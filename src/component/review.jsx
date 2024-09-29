import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate here

function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate here
  const { formData } = location.state || {}; // Check if formData exists

  const handleConfirm = () => {
    alert(`Congratulations ${formData.name}, your application has been submitted successfully!`);
    navigate('/'); // Use navigate instead of history
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Review Your Information</h2>
      {formData ? ( // Check if formData exists
        <>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>College:</strong> {formData.college}</p>
          <p><strong>10th Marks:</strong> {formData.tenthMarks}</p>
          <p><strong>12th Marks:</strong> {formData.twelfthMarks}</p>
        </>
      ) : (
        <p>No data available.</p>
      )}
      <button onClick={handleConfirm}>Confirm and Submit</button>
      <button onClick={() => navigate('/form')}>Go Back to Edit</button>
    </div>
  );
}

export default ReviewPage;