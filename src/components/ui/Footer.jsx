import React from 'react'

export const Footer = () => {
    return (
        <div
            className='mt-5' 
            style={{
                backgroundColor:'#7c7a76',
                color: 'black',
                borderTop: '1px solid wheat',
                height:'230px'
            }}>
            <h2 style={{ textAlign: 'center' }}>Informacion sobre esta web</h2>
            <hr style={{color:'wheat',width:'80%',textAlign:'center', marginLeft:'10%'}} />
            <div
                className='d-flex flex-row mt-5 mb-0 ms-2 justify-content-between'>
                <div className='d-flex flex-column'>
                    <h6 style={{textAlign:'center'}}>Los endpoints trabajados son de: <a style={{color:'black'}} href={'https://rickandmortyapi.com/documentation/#character'}> Documentacion </a></h6>
                    <h6 style={{textAlign:'center'}}>La informacion consumida en esta web fue directamene sacada de: <br /> <a style={{color:'black'}} href='https://rickandmortyapi.com/'> Rick and Morty Api</a></h6>
                </div>
                <div className='d-flex flex-column me-2'>
                    <h3 style={{ textAlign: 'center' }}>Informacion personal para oferta laboral</h3>
                    <div>
                        <h6>Nombre: Diego Ignacio Lundstedt Muñoz</h6>
                        <h6>Email de contacto: diegolundstest99@gmail.com</h6>
                    </div>
                </div>
            </div>
            <hr style={{color:'wheat',width:'80%',textAlign:'center', marginLeft:'10%'}} />
        </div>
    )
}
