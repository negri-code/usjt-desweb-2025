import axios from 'axios'
import striptags from 'striptags'
import {useEffect, useState } from 'react'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

// const Busca = () => {
//     const [termoDeBusca, setTermoDeBusca] = useState('')
//     useEffect (() => {
//         console.log("Executando todas as vezes")
//     })

//     useEffect(() = {
//         console.log("Executando somente uma vez")
//     }, [])

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('React')
    const [resultados, setResultados] = useState([])
    console.log(resultados)
    //Executando da primeira vez e todas vezes que a variavel termo for atualizada:
    useEffect(() => {
        const fazBusca = async () => {
            const { data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: { 
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    srsearch: termoDeBusca,
                    origin: '*' //Todas as origens
                }
            })
            setResultados(data.query.search)
        }
        //if (termoDeBusca)
        fazBusca()
    }, [termoDeBusca])
        
    return (
        <div>
            <IconField iconPosition="left"> 
                <InputIcon className="pi pi-search"></InputIcon>
                <InputText
                placeholder='Buscar...'
                value={termoDeBusca}
                onChange={(e) => {
                    setTermodeBusca(e.target.value)
                }}/>
            </IconField>
            {
            resultados.map((resultado) => (
                <div key={resultado.pageid}
                className="my-3 border border-1 border-400">
                        <div className=" border-bottom border-1 border-400 p-3 text-center font-bold">
                            {resultado.title}
                        </div>
                        <div>
                            <span
                            dangerouslySetInnerHTML={{__html: resultado.snippet}}>
                            </span>
                        </div>
                </div>
            ))
        }
        </div>
    )
}
export default Busca