import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from '../../widget/ContactBox/Buton';
//import Header from "../../layout/header/Header";
//import Wrapper from "../../layout/wrapper/Wrapper";
//import Grid from "@material-ui/core/Grid";
//import Footer from "../../layout/footer/Footer";
//import { Route, Router, Switch } from "react-router-dom";

class Home extends Component {

    static propTypes = {
        fetchDataFromBackend: PropTypes.func,
        data: PropTypes.object
    };

    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDataFromBackend();
    }

    render() {
        return (
            <section className="wrapper">

<Button />
            </section>
        );
    }
}



export default Home;
