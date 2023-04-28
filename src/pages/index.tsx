import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import Navbar from '../components/Navbar'
import Body from '../components/layouts/Body'

const inter = Inter({ subsets: ['latin'] })

const navigation = [
  { name: "Projets", href: "/projets"},
  //{name: "Blog", href: "/blog"},
  { name: "Contact", href: "/contact"}
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  )
}
