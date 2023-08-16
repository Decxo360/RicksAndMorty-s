import { useParams } from 'react-router-dom'
import { useGetCharacterByIdQuery } from '../store/api/RicksAndMortys';


export const DetailsScreen = () => {
    const params = useParams()
    const { data = [], isLoading } = useGetCharacterByIdQuery(params.id)
    return (
        <div style={{ color: 'wheat',height:'530px'}}>
            <div 
                className='d-flex flex-row justify-content-between'
                style={{
                    border:'2px solid wheat',

                }}
            >
                <img
                    className='mt-3'
                    src={data.image}
                    alt={data.name}
                    style={{
                        border: '2px solid wheat',
                        borderRadius: '100px',
                        width: '200px',
                        height: '200px',
                        marginLeft: '2%'
                    }}
                />
                <div className='d-flex flex-column ms-2 mb-5 mt-4'>
                    <h3>{data.name}</h3>
                    <h3>{`Estado: ${data.status}`}</h3>
                    <h3>{`Origen: ${data.origin?.name}`}</h3>
                    <h3>{`Genero: ${data.gender}`}</h3>
                </div>
                <div className='d-flex flex-column ms-3 mt-4'>
                    <h3>Última vez visto en: <br></br>{data.location?.name}</h3>

                    <h3>Tipo de su especie: <br></br>{data.type === null ? 'Unknown' : data.type }</h3>    
                </div>
            </div>
            <div className='d-flex flex-row mt-3 ms-3 justify-content-center'>
                <div className='d-flex flex-column justify-content-around'>
                    <h3>Episodios en los que aparece</h3>
                        <ul>
                            {data.episode?.map((ep,index)=>(
                                <li key={index}>{ep}</li>
                            ))}
                        </ul>
                </div>
                <h4 className='ms-4 mt-2'>Este personaje ha sido creado el: <br></br>{data.created}</h4>
            </div>
        </div>
    )
}
