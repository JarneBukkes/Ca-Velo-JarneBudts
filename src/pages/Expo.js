import useNetwork from '@/data/network';
import { useRouter } from 'next/router'

export default function Home() {
 

  const station = network.stations.find(station => station.name === "299- Antwerp expo" )

  const textStyle ={
    display: 'block',
    fontFamily: 'verdana',
    color: '#e82127',
    textAlign: 'center'
  }
  const textStyle2 ={
    display: 'block',
    fontFamily: 'verdana',
    paddingTop: '10px',
    textAlign: 'center',
    fontSize:  '23px'
  }
  return (
    <div>
      <h1 style = {textStyle}>{station.name}</h1>
      <p style = {textStyle2}> hier zijn nog {station.free_bikes} fietsen vrij!</p>
    </div>
  )
}
