//rafce - cria a base do react

import React from 'react'

const Pedido = () => {
    return (
        <div className="card">
            <div className="card-header">22/04/2024</div>
            <div className="card-body d-flex">
                <div className="d-flex align-items-center"><i className="fa-solid fa-fish fa-2x"></i></div>
            </div>

            <div className="ms-3 border border-danger flex-grow-1">
                <h4 className="text-center">Peixe</h4>
                <p className="text-center">Café expresso com açúcar R$ 7,90</p>
            </div>
        </div>
    )
}

export default Pedido
