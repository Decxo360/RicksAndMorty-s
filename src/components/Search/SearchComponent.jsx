import { useState } from "react";
import { useForm } from "../../hooks/useForm"
import { useGetCharacterByNameQuery } from "../../store/api/RicksAndMortys";
import { CharacterContent } from "../CharacterContent";


export const SearchComponent = () => {
    const [search, setSearch] = useState('')
    const [{ busqueda }, handleInputChange, reset] = useForm({ busqueda: '' })
    const { data = [], isLoading } = useGetCharacterByNameQuery(search)
    const onAddSearch = (e) => {
        e.preventDefault();
        setSearch(busqueda);
    }
    return (
        <div>
            <div className="d-flex flex-row justify-content-center items-center "style={{width:"100%"}}>
                <form style={{width:"100%"}} className="d-flex flex-row justify-content-center">
                    <input
                        type="text"
                        placeholder="  ej: Rick Sanchez"
                        name='busqueda'
                        value={busqueda}
                        onChange={handleInputChange}
                        style={{
                            height: '50px',
                            borderRadius: '5px 5px 5px 5px',
                            border: '1px solid white',
                            backgroundColor: "white",
                            textAlign:"center",
                            color: "black",
                            width:"25%"
                        }} />
                </form>
            </div>
            {isLoading
                ? <h1 className="d-flex justify-content-center" style={{color:'white'}}>Cargando...</h1>
                :
                <div>
                    <h3 className="d-flex justify-content-center" style={{color:'white'}}>{search !== '' ? `Su busqueda fue: ${search}` : '' }</h3>
                    <div className={`d-flex flex-wrap ${data.results.length < 3 ? 'justify-content-center' : '' }`}>
                        {data.results.map(result => (
                            <CharacterContent
                                key={result.id}
                                img={result.image}
                                name={result.name}
                                species={result.species}
                                gender={result.gender}
                                status={result.status}
                                id={result.id}
                            />))}
                    </div>
                </div>

            }
        </div>
    )
}
