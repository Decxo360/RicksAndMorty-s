import { useNavigate } from "react-router-dom"

export const CharacterContent = ({ img, name, status, species, gender, id }) => {

  const navigate = useNavigate()

  const onGoToDetail = () => {
    navigate(`/details/${name}/${id}`)
  }

  return (
    <div
      style={{
        marginTop: '50px',
        border: '1px solid #424242',
        width: '300px',
        borderRadius: '5px',
        marginLeft: '135px',
        order: '4'
      }}>
      <div
        className="cursor d-flex justify-content-center"
        onClick={onGoToDetail}
      >
        <div style={{ marginLeft: '22px', marginTop: '10px' }}>
          <img src={img}
            alt="" style={{ width: '150px', height: '150px', borderRadius: '75px' }} />
        </div>
      </div>
      <div className="d-flex justify-content-center flex-column" style={{ marginTop: '20px', textAlign:"center"}}>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Nombre: {name}</h5>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Vivo o Muerto: {status}</h5>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Raza: {species}</h5>
        <h5 style={{ color: 'wheat', marginLeft: '10px', marginRight: '10px' }}>Genero: {gender}</h5>
      </div>
    </div>
  )
}

