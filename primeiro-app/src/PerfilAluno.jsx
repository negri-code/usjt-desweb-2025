import React from 'react'
import ReactDOM from 'react-dom'

const PerfilAluno = () => {
    const pessoa = {
    "nome": "Lucas",
    "idade": 22,
    "curso": "Engenharia de Software",
    "status": true,
    }
    return(
        <div className="row">
            <div className="col-4">
                <h3>meu nome é: + {pessoa.nome}</h3>
            </div>
            <div className="col-4">
                <p style={{color: "blue", textAlign: "center"}}>{pessoa.curso}</p>
            </div>
            <div className="col-4">
                <p>{pessoa.status ? "Aprovado":"Reprovado"} </p>
            </div>
            
        </div>
    )

}

export default PerfilAluno