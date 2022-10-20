export const addition = (value)=> {
    return{
        type:'add_num',
        payload:value
    }
    
    
}
export const subtraction = (value)=> {
    return{
        type:'SUBTRACT_NUM',
        payload:value
    }   
}