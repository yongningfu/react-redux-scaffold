import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        state: state
    }

}

/**
 * connect()  参数必须是  state 然后 dispatch
 * 顺序不能倒过来
 * */

const C_App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default C_App;

