import Head from 'next/head'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default function Home({ pokemonData }) {
  console.log(pokemonData)
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Component */}
      <Header />
      <main className="h-screen bg-gray-200 scrollbar-hide ">
        {/* Search Bar Component */}
        <SearchBar />
        {/* Body Component */}
      </main>
      <footer>{/* Footer Component */}</footer>
    </div>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const { results } = await res.json()
    const pokemonData = results.map((result, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
      return {
        ...result,
        image,
      }
    })

    return {
      props: { pokemonData },
    }
  } catch (err) {
    console.error(err)
  }
}
