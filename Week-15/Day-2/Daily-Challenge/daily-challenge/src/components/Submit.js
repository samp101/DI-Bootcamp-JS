const Submit = (props)=>{
    const {submit} = props
    return(
        <div>
            <input type ='button' value='Submit' onClick={submit}></input>
        </div>
    )

}

export default Submit