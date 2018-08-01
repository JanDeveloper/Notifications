import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
//import ImageBox from "../../widget/ImageBox/ImageBox";
//import EventBox from "../../widget/EventBox/EventBox";
//import ServiceBox from "../../widget/ServiceBox/ServiceBox";
//import ActivityBox from "../../widget/ActivityBox/ActivityBox";
import ContactBox from "../../widget/ContactBox/ContactBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Contact extends Component {

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
                <Header page="contact" />
                <main className="contacts" style={{ height: 800 }}>
                    <Grid 
                        container 
                        spacing={24}
                    >
                        <Grid 
                            item 
                            xs={24} 
                            sm={12}
                        >
                            <h2 className="wrapper-title">{"Kontakt"}</h2>
                            {
                                this.props.data && this.props.data.credos.map((credo) => {
                                    return <ContactBox 
                                        content={credo.content} 
                                        id={credo.id}
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



export default Contact;
