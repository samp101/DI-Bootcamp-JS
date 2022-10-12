const Gender = (props)=>{
    const {addToState} = props
    return(
        <div>
            <div>
                <input type ='radio' value='male' name='gender' onClick={addToState}></input>
                <label>Male</label>
            </div>
            <div>
                <input type ='radio' value='female' name='gender' onClick={addToState}></input>
                <label>Female</label>
            </div>
        </div>
    )
}

export default Gender