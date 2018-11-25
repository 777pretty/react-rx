import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>   
                    {this.props.storedResults.map(sR => (                       
                        <li key={sR.id} onClick={this.props.onDeleteResult}> {sR.value} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cnt: state.counter,
        storedResults: state.results
};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrCnt: () => dispatch({type: 'INCREMENT'}),
        onDecrCnt: () => dispatch({type: 'DECREMENT'}),
        onAddFCnt: () => dispatch({type: 'ADDFIVE', value: 5}),
        onSubFCnt: () => dispatch({type: 'SUBFIVE', value: 5}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);