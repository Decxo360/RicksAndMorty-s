

export const SearchComponent = () => {
    return (
        <div className="d-flex flex-row justify-content-center mt-3">
                <form>
                    <input
                        type="text"
                        placeholder="  ej: Rick Sanchez"
                        style={{
                            height: '40px',
                            borderRadius: '5px 0px 0px 5px',
                            border: '1px solid white',
                            backgroundColor:'#000000',
                            color:"white",
                            borderRight:'none'
                        }} />
                </form>
                <button  type="button" style={{
                    borderRadius: '0px 5px 5px 0px',
                    border: '1px solid white',
                    borderLeft:'none',
                    height: '40px',
                    marginTop: '0px',
                    backgroundColor:'#000000',
                    color:'white'
                }}>Buscar</button>
        </div>
    )
}
