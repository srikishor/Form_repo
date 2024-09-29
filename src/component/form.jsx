import React, { useState } from 'react';
import StudentInfo from './component/StudentInfo';
import FamilyDetails from './component/FamilyDetails';
import CertificateUpload from './component/CertificateUpload';
import Review from './component/Review';

function ScholarshipForm() {
  const [formData, setFormData] = useState({
    studentInfo: {},
    familyDetails: {},
    certificates: {},
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    // Final submission logic
    console.log('Final submission data:', formData);
    alert('Application submitted successfully!');
  };

  const steps = [
    <StudentInfo onNext={handleNext} />,
    <FamilyDetails onNext={handleNext} />,
    <CertificateUpload onNext={handleNext} />,
    <Review data={formData} onSubmit={handleSubmit} />,
  ];

  return (
    <div>
      <h1>Scholarship Application</h1>
      {steps[currentStep]}
    </div>
  );
}

export default ScholarshipForm;