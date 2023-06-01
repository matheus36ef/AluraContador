import React from 'react';
import style from './style.module.scss';
import { ChildProcess, ChildProcessWithoutNullStreams } from 'child_process';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({type, onClick, children} : Props) {
    return (
        
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
        
    )
}

/* 

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
 */
export default Botao;