import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/components/Preloader/Preloader';
import Routes from "./components/Routes";


class App extends React.Component {
    catchAllUnhandleErrors = (promiseRejactionEvent) => {
        // alert('Some error occured')
        console.error(promiseRejactionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


