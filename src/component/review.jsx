import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const handleConfirm = () => {
    alert(`Congratulations ${formData.studentFirstName} ${formData.studentLastName}, your application has been submitted successfully!`);
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Review Your Information</h2>
      {formData ? (
        <>
          <p><strong>Name:</strong> {formData.studentFirstName} {formData.studentLastName}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>College:</strong> {formData.college}</p>
          <p><strong>10th Percentage:</strong> {formData.tenthPercentage}%</p>
          <p><strong>12th Percentage:</strong> {formData.twelfthPercentage}%</p>
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