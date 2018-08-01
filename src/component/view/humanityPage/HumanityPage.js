import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
//import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
//import ImageBox from "../../widget/ImageBox/ImageBox";
//import EventBox from "../../widget/EventBox/EventBox";
import HumanityBox from "../../widget/HumanityBox/HumanityBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Humanity extends Component {

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
            <section className="church--wrapper">
                <Header page="humanity" />
                <main className="humanities" style={{ height: 700 }}>
                    <article>
                        <h1 className="naslov1">{"LJUBAV"}</h1>
                        <h1 className="naslov2">{"NA DELU"}</h1>

                    </article>
                    <Grid 
                        container 
                        spacing={24}
                    >
                        <Grid 
                            item 
                            xs={24} 
                            sm={12}
                        >
                            {
                                this.props.data && this.props.data.humanities.map((humanity) => {
                                    return <HumanityBox 
                                        content={humanity.content} 
                                        id={humanity.id}
                                    />
                                })
                            }
                        </Grid>
                    </Grid>
                </main>
                <Map/>
                <Footer/>
            </section>
        );
    }
}

export default Humanity;
