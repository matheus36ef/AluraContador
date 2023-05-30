import React from "react";
import Style from './Relogio.module.scss'

interface Props{
    tempo: number | undefined
}

export default function Relogio({ tempo = 0} : Props) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60
    const [minutoString, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoString, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <React.Fragment>
            <span className={Style.relogioNumero}>{minutoString}</span>
            <span className={Style.relogioNumero}>{minutoUnidade}</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>{segundoString}</span>
            <span className={Style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    )
}