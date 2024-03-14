import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex  flex-col items-center  p-24">
     <span className='text-5xl'>Hola Mundo</span>

     <Link href='/about'>Ir a About</Link>
    </main>
  )
}
