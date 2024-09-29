import React, { useState } from 'react';

function StudentInfo({ onNext }) {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    dob: '',
    age: '',
    gender: '',
    adharNumber: '',
    idCardNumber: '',
    college: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ studentInfo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Information</h2>
      {/* Form Fields Here (similar to previous examples) */}
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={studentInfo.name} onChange={handleChange} required />
      </div>
      <div>
        <label>DOB: </label>
        <input type="date" name="dob" value={studentInfo.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" name="age" value={studentInfo.age} onChange={handleChange} min="0" max="99" required />
      </div>
      <div>
        <label>Gender: </label>
        <select name="gender" value={studentInfo.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Aadhar Number: </label>
        <input type="text" name="adharNumber" value={studentInfo.adharNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>ID Card Number: </label>
        <input type="text" name="idCardNumber" value={studentInfo.idCardNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Select College: </label>
        <select name="college" value={studentInfo.college} onChange={handleChange} required>
          <option value="">Select College</option>
          <option value="JNTUK">JNTUK</option>
          <option value="ANU">ANU</option>
          <option value="Karnataka University">Karnataka University</option>
        </select>
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default StudentInfo;