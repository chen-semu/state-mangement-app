import {UP,DOWN,RESET,UPDATE,RANDOMEQUATION} from './counterTypes'
export const upAction= {type:UP}
export const downAction= {type:DOWN}
export const resetAction= {type:RESET}
export const updateAction=(newNum)=>{
    return {type:UPDATE,payload:newNum}
}
export const randomEquationAction=(randomNum)=>{
    return {type:RANDOMEQUATION,payload:randomNum}
}
