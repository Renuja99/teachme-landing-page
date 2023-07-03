import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Search } from '@/components/searchbar'
import { Categories } from '@/components/categories' 

export default function Home() {
  return (
    <main className='lg:w-[85%] w-[100%] m-auto bg-white' >
      <Navbar/>
      <Search />
      <Categories />
    </main>
  )
}
