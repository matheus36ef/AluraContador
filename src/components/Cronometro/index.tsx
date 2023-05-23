import Botao from "../Botao";
import Relogio from "./Relogio";
import Style from './Cronometro.module.scss';

import {useState} from 'react'

import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";


interface Props {
    selecionado: ITarefa | undefined;
}

export default function Cronometro ({ selecionado } : Props){
    /* Trabalhando aqui ----- */

    const [tempo, setTempo] = useState<Number>();
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo))
    }
    
    /* Trabalhando aqui ----- */


    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronometro.</p>

            <div className={Style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!!
            </Botao>
        </div>

    )
}