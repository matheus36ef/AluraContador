import React, { useState } from "react";
import style from './style.module.scss';
import Item from "./item";

import { ITarefa } from "../../types/tarefas";



function Lista({tarefas}: {tarefas:  ITarefa[]}) {
    

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        tarefa = {item.tarefa}
                        tempo = {item.tempo} 
                    />
                    
                ) )}                   
            </ul>
        </aside>
    )
}

export default Lista;