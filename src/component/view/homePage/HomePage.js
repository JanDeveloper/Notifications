import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
import ImageBox from "../../widget/ImageBox/ImageBox";
import EventBox from "../../widget/EventBox/EventBox";
import ServiceBox from "../../widget/ServiceBox/ServiceBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";
import { Route, Router, Switch } from "react-router-dom";
import EventNavBox from "../../widget/EventBox/EventNavBox";

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
            <section className="church--wrapper">
                <Header page="home" />
                <main style={{ marginBottom: 30 }}>
                    <article>
                        <h1>{"Dobrodošli na sajt Evanđeoske Crkve Banovo brdo"}</h1>
                        <h3>{"Drago nam je da ste ovde"}</h3>
                    </article>
                    <Grid 
                        container
                        spacing={24}
                    >
                        <Grid 
                            item 
                            xs={12} 
                            sm={6}
                        >
                            <h2 className="main-title">{"Dogadjaji"}</h2>
                           
                            {
                               this.props.data && this.props.data.events.slice(-4).map((event) => {

                                return <EventBox 
                                    date={event.date}
                                    month={event.month}
                                    title={event.title} 
                                    content={event.content.substr(0, 120)} 
                                    id={event.id}                                        
                                />
                            })
                            }
                            
                            <EventNavBox />
                        </Grid>
                        <Grid 
                            item 
                            xs={12} 
                            sm={6}
                        >
                            <ImageBox/>
                        </Grid>
                    </Grid>
                </main>
                <Wrapper/>
                <main style={{ height: 1200 }}>
                    <article>
                        <h1 className="naslov1">{"MESTO GDE SVAKO"}</h1>
                        <h1 className="naslov2">{"MOŽE NAĆI HRISTA"}</h1>
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
                            <h2 className="wrapper-title">{"Bogosluženja"}</h2>
                            {
                                this.props.data && this.props.data.services.map((service) => {
                                    return <ServiceBox 
                                        hour={service.hour}
                                        day={service.day}
                                        title={service.title} 
                                        content={service.content.substr(0, 120)} 
                                        id={service.id}
                                        photo={service.photo}
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



export default Home;
