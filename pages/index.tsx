import Head from 'next/head'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

export default function Home() {
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

export async function getStaticProps() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.json())
    .then((allpokemon) => console.log(allpokemon))
  return {
    props: {},
  }
}
