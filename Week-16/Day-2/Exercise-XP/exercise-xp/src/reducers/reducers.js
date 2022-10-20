const initState = {
    count:5
}



export const reducerXpHw = (state=initState,action={}) => {
    switch (action.type) {
        case 'add_num':
            return {...state,count:state.count+1}
        case 'SUBTRACT_NUM':
            return {...state,count:state.count-1}

        default:
            break;
    }
    return {...state}
}
