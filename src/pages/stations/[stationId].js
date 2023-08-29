import useNetwork from '@/data/network';
import { useRouter } from 'next/router'

export default function Home() {
  const { network, isLoading, isError } = useNetwork()
  const router = useRouter()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  const station = network.stations.find(station => station.id === router.query.stationId)

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
      <p style = {textStyle2}> hier zijn nog {station.empty_slots} fietsen beschikbaar!</p>
      <p style = {textStyle2}> Er zijn ook nog {station.free_bikes} plaatsjes vrij! </p> 
    </div>
  )
}
