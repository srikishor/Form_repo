import React, { useState } from 'react';

function CertificateUpload({ onNext }) {
  const [certificates, setCertificates] = useState({
    idCard: null,
    incomeCertificate: null,
    tenthCertificate: null,
    twelfthCertificate: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCertificates({ ...certificates, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ certificates });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Certificates</h2>
      {/* File Upload Fields Here */}
      <div>
        <label>Upload ID Card: </label>
        <input type="file" name="idCard" onChange={handleFileChange} required />
      </div>
      <div>
        <label>Upload Income Certificate: </label>
        <input type="file" name="incomeCertificate" onChange={handleFileChange} required />
      </div>
      <div>
        <label>Upload 10th Certificate: </label>
        <input type="file" name="tenthCertificate" onChange={handleFileChange} required />
      </div>
      <div>
        <label>Upload 12th Certificate: </label>
        <input type="file" name="twelfthCertificate" onChange={handleFileChange} required />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default CertificateUpload;