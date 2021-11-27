import React from 'react'
import { connect } from 'react-redux';
// redux action
import { increase } from '../redux/counter/counterAction';
import { decrease } from '../redux/counter/counterAction';

const counter = (props) => {
    return (
        <div>
            <h1>counter{props.counter}</h1>
            <button onClick={props.increase}>increase</button>
            <button onClick={props.decrease}>decrease</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(counter);
