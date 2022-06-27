import './App.css'


import { useDispatch, useSelector } from 'react-redux'
import { CharacterContent } from './components/CharacterContent'
import { increment,decrement,reset } from './store/slices/counter/CounterSlice'

export const App =()=> {

  const counter =useSelector(state=>state.counter)
  const dispatch = useDispatch();


  console.log(counter);
  return (
    <div>
        <img src='./src/logo.png' className='img-fluid' alt='algoctm' style={{width:'25%',marginLeft:'39%'}}/>
        <div className='d-flex justify-content-between' style={{marginTop:'20px'}}>
          <button className='btn btn-outline-primary' disabled={counter.page === 1 ? true : false} onClick={()=>dispatch(decrement())}>Anterior</button>
          <button className='btn btn-outline-primary' onClick={()=>dispatch(reset())}>Resetear</button>
          <button className='btn btn-outline-primary' onClick={()=>dispatch(increment())} style={{right:'0px'}}>Siguiente</button>
        </div>

        <CharacterContent/>


    </div>
  )
}


