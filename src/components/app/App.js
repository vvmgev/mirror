import React, { Component } from 'react';
import { connect } from "react-redux";
import { setName } from '../../actions/app';
import './app.less';

class App extends Component {
    render() {
        const { props } = this;
        return (
            <div>
                <div>name is {props.app.name}</div>
                <button 
                    onClick={() => props.setName('Anna') }
                >set name </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
    };
 };
  
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);