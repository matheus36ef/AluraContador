import Botao from "../Botao";
import Relogio from "./Relogio";
import Style from './Cronometro.module.scss';

import {useEffect, useState} from 'react'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";


interface Props {
    selecionado: ITarefa | undefined;
}

export default function Cronometro ({ selecionado } : Props){
    /* Trabalhando aqui ----- */

    const [tempo, setTempo] = useState<number>();

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
            <Botao>
                Começar!!
            </Botao>
        </div>

    )
}