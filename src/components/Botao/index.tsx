import React from 'react';
import style from './style.module.scss';
import { ChildProcess, ChildProcessWithoutNullStreams } from 'child_process';

class Botao extends React.Component<{
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined 
    onClick?: () => void}> {
    render(){
        const {type = "button", onClick} = this.props;
        return(
            <button type={type} className={style.botao} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;