import React from 'react'
import { useEffect, useState } from 'react';
import "./style.css"
import playMusic from "./music.mp3";
import useSound from "use-sound";

function Counter() {
    const [letsPlay] = useSound(playMusic)
    let [num, setNum] = useState(0);

    useEffect(() => {
    
        letsPlay();
      }, [letsPlay]);

    let incNum = () => {
        setNum(num + 1)
    }

    let decNum = () => {
        if(num > 0){
            setNum(num -1)
        }
    }

    let handleChange = (e) => {
            setNum(e.target.value);
    }
    return (
        <div>
            <section>
                <div className="box">
                    <h1>Uncle_Philxi Calculator</h1>
                    <button onClick={incNum}>+</button>
                    <input value={num} onChange={handleChange} />
                    <button onClick={decNum}>-</button>
                </div>
            </section>
        </div>
    )
}

export default Counter