import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
import ImageBox from "../../widget/ImageBox/ImageBox";
import AllEventBox from "../../widget/EventBox/AllEventBox";
import ServiceBox from "../../widget/ServiceBox/ServiceBox";
import ActivityBox from "../../widget/ActivityBox/ActivityBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Events extends Component {

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
                <Header page="activity" />
                <Wrapper page="activity" />
                <main className="allevents" style={{ height: 1200 }}>
                    <Grid 
                        container 
                        spacing={24}
                    >
                        <Grid 
                            item 
                            xs={24} 
                            sm={12}
                        >
                            <h2 className="wrapper-title">{"Dogadjaji"}</h2>
                            {
                                this.props.data && this.props.data.events.map((event) => {
                                    return <AllEventBox 
                                    date={event.date}
                                    month={event.month}
                                    title={event.title} 
                                    content={event.content} 
                                    id={event.id}
                                />
                                })
                            }
                        </Grid>
                    </Grid>
                </main>
                <Footer/>
            </section>
        );
    }
}



export default Events;
