import React, { useState } from 'react';

function FamilyDetails({ onNext }) {
  const [familyDetails, setFamilyDetails] = useState({
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    fatherGovtEmployee: false,
    motherGovtEmployee: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox') {
      setFamilyDetails({ ...familyDetails, [name]: checked });
    } else {
      setFamilyDetails({ ...familyDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ familyDetails });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Family and Address Details</h2>
      {/* Form Fields Here */}
      <div>
        <label>Father's Name: </label>
        <input type="text" name="fatherName" value={familyDetails.fatherName} onChange={handleChange} required />
      </div>
      <div>
        <label>Mother's Name: </label>
        <input type="text" name="motherName" value={familyDetails.motherName} onChange={handleChange} required />
      </div>
      <div>
        <label>Father's Occupation: </label>
        <input type="text" name="fatherOccupation" value={familyDetails.fatherOccupation} onChange={handleChange} required />
      </div>
      <div>
        <label>Mother's Occupation: </label>
        <input type="text" name="motherOccupation" value={familyDetails.motherOccupation} onChange={handleChange} required />
      </div>
      <div>
        <label>Father is a Government Employee: </label>
        <input type="checkbox" name="fatherGovtEmployee" checked={familyDetails.fatherGovtEmployee} onChange={handleChange} />
      </div>
      <div>
        <label>Mother is a Government Employee: </label>
        <input type="checkbox" name="motherGovtEmployee" checked={familyDetails.motherGovtEmployee} onChange={handleChange} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default FamilyDetails;