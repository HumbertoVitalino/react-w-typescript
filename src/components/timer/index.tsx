import Button from "../button";
import Watch from "./watch";
import style from './timer.module.scss'
import { ITask } from "../../types/task";
import { useState } from "react";
import { timeForSeconds } from "../../common/utils/time";

interface Props {
    selected: ITask | undefined
}

export default function Timer({ selected }: Props) {
    const [time, setTime] = useState<number>();
    if(selected?.time) {
        setTime(timeForSeconds(selected.time))
    }
    return (
        <div className={style.timer}>
            <p className={style.title}>Choose your card and start the timer.</p>
            Time: {time}
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button 
                button="start"
            />
        </div>
    )
}