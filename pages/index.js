import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ name, year }) {
  return (
    <span>
      name is {name} &
      year is {year}
    </span>
  )
}

export async function getServerSideProps(context) {
  const { name = '', year = '' } = context.query
  return {
    props: {
      name,
      year
    }
  }
}