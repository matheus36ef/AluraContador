import Botao from "../Botao";
import Relogio from "./Relogio";
import Style from './Cronometro.module.scss';

import {useEffect, useState} from 'react'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";


interface Props {
    selecionado: ITarefa | undefined;
    finalizarTarefa: () => void;
}

export default function Cronometro ({ selecionado, finalizarTarefa} : Props){
    /* Trabalhando aqui ----- */

    const [tempo, setTempo] = useState<number>();

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador -1);
                return regressiva(contador -1);
            }
            finalizarTarefa();
        }, 1000);
    }

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(String(selecionado?.tempo)))
        }
    }, [selecionado])

    /* Trabalhando aqui ----- */


    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronometro.</p>

            <div className={Style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => {regressiva(tempo)}}>
                Começar!!
            </Botao>
        </div>

    )
}