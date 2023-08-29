import React from 'react';
import Link from 'next/link';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#e82127',
  marginBottom: '1rem',
  marginTop:'2rem',
  color: 'white'
 
}



  const footerStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '20px',
    paddingLeft: '20px',
    backgroundColor: '#e82127'
  };


    



const imgStyle ={
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
}
  

const linkStyle = {
  marginRight: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none'
}

const HomePage = () => {
  return (
  
<img style={imgStyle}
    src = "https://antwerp-web-prod.s3-eu-west-1.amazonaws.com/blocks/photo_2019-12-02_16-22-59.jpg"
alt = "velo" 
></img>

  );
};

export default HomePage;

