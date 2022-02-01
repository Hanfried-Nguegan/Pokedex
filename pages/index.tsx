import Head from 'next/head'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

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
