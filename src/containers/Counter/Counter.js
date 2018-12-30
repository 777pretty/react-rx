import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, addfive, subfive, store_result, delete_result } from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.cnt} />
                <CounterControl label="Increment" clicked={this.props.onIncrCnt} />
                <CounterControl label="Decrement" clicked={this.props.onDecrCnt}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFCnt}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFCnt}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.cnt)}>Store Result</button>
                <ul>   
                    {this.props.storedResults.map(sR => (                       
                        <li key={sR.id} onClick={() => this.props.onDeleteResult(sR.id)}> {sR.value} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cnt: state.cnt.counter,
        storedResults: state.rst.results
};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrCnt: () => dispatch(increment()),
        onDecrCnt: () => dispatch(decrement()),
        onAddFCnt: () => dispatch(addfive()),
        onSubFCnt: () => dispatch(subfive()),
        onStoreResult: (result) => dispatch(store_result()),
        onDeleteResult: (id) => dispatch(delete_result())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);