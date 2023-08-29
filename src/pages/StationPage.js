import styles from '@/styles/Home.module.css'
import {useState} from 'react';
import useNetwork from '@/data/network';
import Link from 'next/link';


export default function Home() {
  const [filter, setFilter] = useState('');
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }
  const textStyle ={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'verdana',
    color: '#e82127'
  }
  const areaStyle ={
    width: '500px',
    height: '35px',
    border: '3px solid red',
    marginBottom: '30px',
    marginTop: '30px'
  

  }

  const searchStyle ={
  
  fontFamily: 'verdana',
  margin: '10px',
  textDecoration: 'underline',
  
  
}

  return (
    <div>
      <h2 style = {textStyle}>zoek een station:</h2>
      <input style = {areaStyle} type="text" value={filter} onChange={handleFilterChange}/>
      <div></div>
      
      {stations.map(station => <Link style = {searchStyle} href={`/stations/${station.id}`} key={station.id}>{station.name}</Link>)}
      
    </div>
  )
}
