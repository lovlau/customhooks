import { useState } from "react"

export const useCounter=(initial_value=10)=>{

const [counter, setcounter] = useState(initial_value)

const increment=(value=1)=>{
    if (counter===1000) return;
    setcounter(counter+value)
}
const decrement=(value=1)=>{
    // if (counter===0) return;
    setcounter(counter-value)
}
const reset=()=>{
    setcounter(initial_value)
}

return{
    counter,
    increment,
    decrement,
    reset
}

}