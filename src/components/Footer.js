import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      This is a red footer.
    </footer>
  );
};

export default Footer;
