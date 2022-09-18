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
  const response = await fetch(`${process.env.HOST}/api/url_generator?name=${name}&year=${year}&host=${context.req.headers.host}`, {
    method: 'GET',
  })
  const data = await response.json()
  return {
    props: data || {}
  }
}