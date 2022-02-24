import Head from 'next/head'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Link from 'next/link'
import PokemonList from '../components/PokemonList'

export default function Home({ pokemon }) {
  console.log(pokemon)
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-200 scrollbar-hide ">
        <SearchBar />
        <PokemonList pokemon={pokemon} />
      </main>
      <footer>{/* Footer Component */}</footer>
    </div>
  )
}

export async function getStaticProps(context) {
  try {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=500'
    const res = await fetch(apiUrl)
    const { results } = await res.json()
    const pokemon = results.map((pokemon, index) => {
      const paddedId = ('00' + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`

      return { ...pokemon, image }
    })
    return {
      props: { pokemon },
    }
  } catch (err) {
    console.error(err)
  }
}
