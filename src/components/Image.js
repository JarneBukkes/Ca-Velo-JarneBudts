import Image from 'next/image'
import foto from '@pages/footage/foto.png'
export default function Page() {
  return (
    <div>
      <Image
        src={foto}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}