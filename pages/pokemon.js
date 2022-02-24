import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Pokemon({ pokeman }) {
  console.log(pokeman)
  return (
    <div>
      <Head>
        <title>Pokemon | {pokeman.name}</title>
      </Head>
      <Header />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const id = query.id
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokeman = await res.json()
    const paddedId = ('00' + id).slice(-3)
    pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
    return {
      props: { pokeman },
    }
  } catch (err) {
    console.log(err)
  }
}
