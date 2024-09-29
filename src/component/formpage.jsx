import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useNavigation

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    college: '',
    tenthMarks: '',
    twelfthMarks: ''
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Use useNavigate here

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && formData.name && formData.age && formData.college) {
      setStep(2);
    } else if (step === 2 && formData.tenthMarks >= 75 && formData.twelfthMarks >= 75) {
      setStep(3);
    }
  };

  const handleSubmit = () => {
    if (formData.tenthMarks >= 75 && formData.twelfthMarks >= 75) {
      navigate('/review', { state: { formData } }); // Use navigate instead of history
    }
  };

  return (
    <div style={{ border: '1px solid black', width: '50%', margin: 'auto', padding: '20px', marginTop: '50px' }}>
      {step === 1 && (
        <>
          <h2>Student Information</h2>
          <div style={{ marginBottom: '1cm' }}>
            <label>Name: </label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '1cm' }}>
            <label>Age: </label>
            <input name="age" type="number" value={formData.age} onChange={handleChange} required min="0" max="99" />
          </div>
          <div style={{ marginBottom: '1cm' }}>
            <label>College: </label>
            <select name="college" value={formData.college} onChange={handleChange}>
              <option value="">Select College</option>
              <option value="JNTUK">JNTUK</option>
              <option value="ANU">ANU</option>
              <option value="Karnataka University">Karnataka University</option>
            </select>
          </div>
          <button onClick={handleNext}>Next</button>
          <hr />
        </>
      )}
      {step === 2 && (
        <>
          <h2>Certificates Upload</h2>
          <div style={{ marginBottom: '1cm' }}>
            <label>10th Marks: </label>
            <input name="tenthMarks" type="number" value={formData.tenthMarks} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '1cm' }}>
            <label>12th Marks: </label>
            <input name="twelfthMarks" type="number" value={formData.twelfthMarks} onChange={handleChange} required />
          </div>
          <button onClick={handleNext}>Next</button>
          <hr />
        </>
      )}
      {step === 3 && (
        <>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default FormPage;