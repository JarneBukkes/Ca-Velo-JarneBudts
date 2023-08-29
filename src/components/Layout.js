import Link from 'next/link';
import Image from 'next/image';
export default function Layout({ children }) 
{

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
  width: '20',
}
  

const linkStyle = {
  marginRight: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none'
}


  return (

    <>
   
    <img style={imgStyle}
    src = "https://www.vmm.be/evenementen/afbeeldingen-evenementen/apen.png/@@images/image.png"
alt = "Jarne Budts" 
></img>
      

        <nav style={navStyle}>


            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/StationPage"style={linkStyle}>Stations</Link>
            <Link href="/Favorites"style={linkStyle}>Favorieten</Link>
            <Link href="/info"style={linkStyle}>Info</Link>
            
        </nav>
        <main>{children}</main> 
        <footer style={footerStyle}>
      Gemaakt door Jarne Budts
    </footer>     
    </>
  )

  }