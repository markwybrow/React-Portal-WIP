import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync
} from '../../modules/counter'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Count: {props.count}</p>

        <p>
            <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>

        <p>
            <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>

        <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
    </div>
)

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)