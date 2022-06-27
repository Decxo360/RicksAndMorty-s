import './App.css'


import { useDispatch, useSelector } from 'react-redux'
import { CharacterContent } from './components/CharacterContent'
import { increment, decrement, reset } from './store/slices/counter/CounterSlice'
import { useGetCharactersQuery, useGetRicksAndMortysQuery } from './store/api/RicksAndMortys'
import { useState } from 'react'

export const App = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const [character,setCharacter] = useState(1)

  const { data = [], isLoading } = useGetRicksAndMortysQuery(character)
  const { results } = data


  const Next=()=>{
    setCharacter(character+1)
  }
  const reset=()=>{
    setCharacter(1)
  }
  const Previus=()=>{
    setCharacter(character-1)
  }

  return (
    <div>
      <img src='./src/logo.png' className='img-fluid' alt='algoctm' style={{ width: '25%', marginLeft: '39%' }} />
      <div className='d-flex justify-content-between' style={{ marginTop: '20px' }}>
        <button className='btn btn-outline-primary' disabled={character === 1 ? true : false} onClick={Previus}>Anterior</button>
        <button className='btn btn-outline-primary' onClick={reset}>Resetear</button>
        <button className='btn btn-outline-primary' onClick={Next} style={{ right: '0px' }}>Siguiente</button>
      </div>
      <div className='d-flex flex-wrap'>
        {!isLoading 
        ? 
        results?.map(result => (
          <CharacterContent
            key={result.id}
            img={result.image}
            name={result.name}
            species={result.species}
            gender={result.gender}
            status={result.status}
          />
        ))
        : 
        <>Cargando.....</>}
      </div>


    </div>
  )
}


