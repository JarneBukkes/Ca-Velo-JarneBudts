import React from 'react';
import Link from 'next/link';
const CenteredButtons = () => {
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const customButtonStyle = {
    padding: '50px 52px',
    margin: '40px',
    marginTop: '2px',
    fontSize: '25px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4500px',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <div style={buttonContainerStyle}>
        <Link href="/Expo.js" style={customButtonStyle}>299 - Antwerpen Expo</Link>
        <Link href="/"style={customButtonStyle}>020 - Groenplaats 2</Link>
        <Link href="/" style={customButtonStyle}>027 - Lange Nieuwstraat</Link>
      </div>
    </div>
  );
};

export default CenteredButtons;
