const Inputs = (props)=>{
    const {addName} = props
    return(
        <div>
    <div>
        <input type='text' name='fname'placeholder='First Name' onChange={addName} ></input>        
    </div>
    <div>      
        <input type='text' name='lname'placeholder='Last Name'  onChange={addName} ></input>        
    </div>
    <div>    
        <input type='number' name='age'placeholder='Age' onChange={addName} ></input>        
     </div>
        </div>
    )

}

export default Inputs