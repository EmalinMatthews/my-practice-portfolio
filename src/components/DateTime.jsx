
import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    let [date,setDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> {date.toLocaleDateString()} {date.toLocaleTimeString()} </p>
        </div>
    )
}

export default DateTime