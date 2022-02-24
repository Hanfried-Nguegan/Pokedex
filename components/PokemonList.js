import React from 'react'
import Link from 'next/link'

function PokemonList({ pokemon }) {
  return (
    <div>
      <ul className="grid grid-cols-2 justify-items-center gap-2 lg:grid-cols-3 ">
        {pokemon.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a>
                <img src={pokemon.image} alt={pokemon.name} />
                <span>{index + 1}</span>
                {pokemon.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
