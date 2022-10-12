const Selection = (props)=>{
    const {addToState} = props
    return(
        <div>
            <p>Select your destinition</p>
           <select name='destination' onClick={addToState}>
                <option  value='canada'>CANADA</option>
                <option  value='usa'>USA</option>
                <option  value='israel'>Israel</option>
           </select>
    
        </div>
    )

}

export default Selection