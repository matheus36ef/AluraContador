import React from 'react';
import Botao from '../Botao';

import style from './style.module.scss';

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        const test = evento.preventDefault(); // mudar depois

        console.log("resultado: ", this.state); // mudar depois
    }
    
    
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}> 
                <div className={style.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo.
                </label>
                <input 
                    type='text' 
                    name='tarefa'
                    value = {this.state.tarefa}
                    onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value})}
                    id='tarefa'
                    placeholder='O que você quer estudar?'
                    required
                />

                </div>
                <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input 
                    type='time'
                    step='1'
                    name='tempo'
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'

                />
                </div>


            <Botao type = "submit">
                Adicionar
            </Botao>
            </form>
        )
    }
}

export default Formulario;  