import {connect} from 'react-redux'
import { addition } from '../reducers/action'

const Inputs = (props)=>{
    return(
        <div>
            <button onClick={props.handleAddition}>+</button>
            {props.b}
            <button onClick={props.decrement}>-</button>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
      b: state.count
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    return{
      handleAddition:() => dispatch({ type: 'add_num' }),
    //   handleAddition:() => dispatch(addition()),
      decrement: () => dispatch({ type: 'SUBTRACT_NUM' }),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Inputs);
  

