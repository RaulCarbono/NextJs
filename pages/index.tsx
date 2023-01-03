import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
    </>
  )
}

export async function getServerSideProps() {
  const traerPokemon = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon${numero}`)
    .then(response => response.json())
    .then(data => data.results)
  }
  let arrayPokemon = []
  for (let index = 1; index <= 20; index++){
    let data = await traerPokemon(index)
    arrayPokemon.push(data)
  }
  return {
    props: {
      name: 'John Doe'
    }
  }
}
