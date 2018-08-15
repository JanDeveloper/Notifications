import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
import ImageBox from "../../widget/ImageBox/ImageBox";
import EventBox from "../../widget/EventBox/EventBox";
import ServiceBox from "../../widget/ServiceBox/ServiceBox";
import ActivityBox from "../../widget/ActivityBox/ActivityBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Activity extends Component {

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
                <main className="activities" style={{ marginBottom: 20 }}>
                    <Grid 
                        container 
                        spacing={24}
                    >
                        <Grid 
                            item 
                            xs={24} 
                            sm={12}
                        >
                            <h2 className="wrapper-title">{"Aktivnosti"}</h2>
                            {
                                this.props.data && this.props.data.activities.map((activity) => {
                                    return <ActivityBox 
                                        hour={activity.hour}
                                        day={activity.day}
                                        title={activity.title} 
                                        content={activity.content} 
                                        id={activity.id}
                                        photo={activity.photo}
                                        date={activity.date}
                                        month={activity.month}
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



export default Activity;
