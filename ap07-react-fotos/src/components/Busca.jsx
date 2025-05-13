import { Component } from 'react';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/IconField'
import { InputIcon } from 'primereact/InputIcon'
//fGxtMhaf6jCYf3UYHBHhJJjHczpwGchoCed8wQcdly5r3fKTzTqhvWjM

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (event) => {
        this.setState({termoDeBusca: event.target.value})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
            //empilhando os filhos
            <div className="flex flex-column">
                {/*ícone à esquerda, largura máxima*/}
                <IconField iconPosition='left'>
                    <InputIcon className= "pi pi-search"></InputIcon>
                    <InputText
                        className="w-full"
                        value={this.state.termoDeBusca}
                        onChange={this.onTermoAlterado}
                        placeholder='O que quer ver?'
                        />
                    
                </IconField>
                <Button
                    label='OK'
                    className="p-button-outlined mt-2"
                    />
             </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}