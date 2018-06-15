import React, { Component } from "react";
import Header from "../../layout/header/Header";

class Home extends Component {

    static propTypes = {};

    constructor( props ) {
        super(props);
    }

    render() {
        return (
            <section className="church--wrapper">
                <Header/>
                <main/>
            </section>
        );
    }
}

export default Home;
