import React from 'react';
import style from './style.module.scss';
import { ChildProcess, ChildProcessWithoutNullStreams } from 'child_process';

class Botao extends React.Component<{children: React.ReactNode}> {
    render(){
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;