import Link from 'next/link';
import { Profiler } from 'react';

export default function Profile(){
    const imgStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '20%'
      
      };
    return(
    <img style ={imgStyle} 
    src = "https://bukkes.be/wp-content/uploads/2022/11/eee820a3be9ebea8885a1521bbe3add5.png"
alt = "Jarne Budts" 
></img>
)

}