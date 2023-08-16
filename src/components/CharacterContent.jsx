import { useNavigate } from "react-router-dom"

export const CharacterContent = ({ img, name, status, species, gender, id }) => {

  const navigate = useNavigate()

  const onGoToDetail = () => {
    navigate(`/details/${name}/${id}`)
  }

  return (
    <div
        className="cursor" 
        onClick={onGoToDetail}
        style={{ 
          marginTop: '20px', 
          border: '1px solid #424242', 
          width: '200px',
          borderRadius: '5px',
          marginLeft: '135px', 
          order: '4' 
          }}>
      <div style={{ marginLeft: '22px', marginTop: '10px' }}>
        <img src={img}
          alt="" style={{ width: '150px', height: '150px', borderRadius: '75px' }} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Nombre: {name}</h5>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Vivo o Muerto: {status}</h5>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Raza: {species}</h5>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Genero: {gender}</h5>
      </div>

    </div>
  )
}
