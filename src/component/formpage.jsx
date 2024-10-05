import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formPage.css';

function FormPage() {
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    fatherFirstName: '',
    fatherLastName: '',
    motherFirstName: '',
    motherLastName: '',
    aadharNumber: '',
    dob: '',
    fatherOccupation: '',
    motherOccupation: '',
    age: '',
    college: '',
    address: '',
    postalCode: '',
    tenthPercentage: '',
    twelfthPercentage: '',
    tenthCertificate: null,
    twelfthCertificate: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    if (formData.tenthPercentage >= 75 && formData.twelfthPercentage >= 75) {
      navigate('/review', { state: { formData } });
    } else {
      alert("Percentage must be at least 75% in both 10th and 12th.");
    }
  };

  return (
    <div style={{ border: '1px solid black', width: '50%', margin: 'auto', padding: '20px', marginTop: '50px' }}>
      <h2>Student Information</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>First Name: </label>
        <input className="form-input" name="studentFirstName" value={formData.studentFirstName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Last Name: </label>
        <input className="form-input" name="studentLastName" value={formData.studentLastName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Age: </label>
        <input className="form-input" name="age" type="number" value={formData.age} onChange={handleChange} required min="0" max="99" />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>College: </label>
        <select className="form-input" name="college" value={formData.college} onChange={handleChange} required>
          <option value="">Select College</option>
          <option value="JNTUK">JNTUK</option>
          <option value="ANU">ANU</option>
          <option value="Karnataka University">Karnataka University</option>
        </select>
      </div>

      <hr />

      <h2>Parent Information</h2>
      <div style={{ marginBottom: '1cm' }}>
        <label>Father's First Name: </label>
        <input className="form-input" name="fatherFirstName" value={formData.fatherFirstName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Father's Last Name: </label>
        <input className="form-input" name="fatherLastName" value={formData.fatherLastName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Father's Occupation: </label>
        <input className="form-input" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Mother's First Name: </label>
        <input className="form-input" name="motherFirstName" value={formData.motherFirstName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Mother's Last Name: </label>
        <input className="form-input" name="motherLastName" value={formData.motherLastName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Mother's Occupation: </label>
        <input className="form-input" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Aadhar Number: </label>
        <input className="form-input" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Date of Birth: </label>
        <input className="form-input" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
      </div>

      <hr />

      <h2>Address</h2>
      <div style={{ marginBottom: '1cm' }}>
        <label>Address: </label>
        <input className="form-input" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Postal Code: </label>
        <input className="form-input" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
      </div>

      <hr />

      <h2>Certificates Upload</h2>
      <div style={{ marginBottom: '1cm' }}>
        <label>10th Percentage: </label>
        <input className="form-input" name="tenthPercentage" type="number" value={formData.tenthPercentage} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>12th Percentage: </label>
        <input className="form-input" name="twelfthPercentage" type="number" value={formData.twelfthPercentage} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Upload 10th Certificate: </label>
        <input className="form-input" name="tenthCertificate" type="file" onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '1cm' }}>
        <label>Upload 12th Certificate: </label>
        <input className="form-input" name="twelfthCertificate" type="file" onChange={handleChange} required />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPage;