import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to the Scholarship Application</h1>
      <Link to="/form" style={{ textDecoration: 'none' }}>
        <button>Click here to apply for Scholarship</button>
      </Link>
    </div>
  );
}

export default HomePage;