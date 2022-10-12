const Userinfo = (props)=>{
    const {state} = props
    console.log(state);
    // console.log(state1);
    console.log(state.allergy[0].peanuts);
    const {fname, lname, age,destination, gender, allergy:[{peanuts,lactose, egg}]  } = state
    // console.log(state1);
    return(
        <div>
            
            <p>Your name: {fname} {lname}</p>
           <p> Your Age: {age} </p>
           <p> Your Gender: {gender} </p>
           <p> Your destination: {destination} </p>
            <ul> You dietary restrictions: 
                <li>nuts: {peanuts?'Yes':'No'} </li>
                <li>Lactose free:{lactose?'Yes':'No'} </li>
                <li>Eggs:{egg?'Yes':'No'} </li>
            </ul>
        </div>
    )

}

export default Userinfo