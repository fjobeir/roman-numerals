import RomanNumeralForm from '@/components/RomanNumeralForm/RomanNumeralForm'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman Numerals Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RomanNumeralForm />
    </>
  )
}
