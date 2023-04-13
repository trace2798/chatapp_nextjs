import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { db } from '@/lib/db'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  await db.set('hello', 'hello')
  return (
    <div className='text-9xl text-blue-400'>Hello World</div>
  )
}
