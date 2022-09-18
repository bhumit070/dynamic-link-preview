import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Building this...</title>
        <meta property="og:title" content={props['og:title'] || "Building this"} />
        <meta property="og:image" content={props['og:image'] || `https://dynamic-link-preview.vercel.app/pikachu.png`} />
        <meta property="og:description" content={props['og:description'] || "Building this site will it work ?"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
      </Head>
    </div>
  )
}

//export async function getServerSideProps(context) {
//  const { name = '', year = '' } = context.query
//  const response = await fetch(`${process.env.HOST}/api/url_generator?name=${name}&year=${year}&host=${context.req.headers.host}`, {
//    method: 'GET',
//  })
//  const data = await response.json()
//  return {
//    props: data || {}
//  }
//}

Home.getInitialProps = async function getInitialProps(context) {
  const { name = '', year = '' } = context.query
  const response = await fetch(`${process.env.HOST}/api/url_generator?name=${name}&year=${year}&host=${context.req.headers.host}`, {
    method: 'GET',
  })
  const data = await response.json()
  return {
    props: data || {}
  }
}