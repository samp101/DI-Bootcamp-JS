const Allergies = (props)=>{
    const {addCheckedToState} = props
    return(
        <div>
            <ul>
                Dietary restrictions
                <li>
                    <input type ='checkbox' value='peanuts' name='allergy' onClick={addCheckedToState}></input>
                    <label>Peanuts</label>
                </li>
                <li>
                    <input type ='checkbox' value='lactose'  name='allergy' onClick={addCheckedToState}></input>
                    <label>Lactose</label>
                </li>
                <li>
                    <input type ='checkbox' value='egg' name='allergy' onClick={addCheckedToState}></input>
                    <label>Egg</label>
                </li>
            </ul>           
        </div>
    )

}

export default Allergies