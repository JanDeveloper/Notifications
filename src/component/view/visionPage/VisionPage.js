import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
//import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
//import ImageBox from "../../widget/ImageBox/ImageBox";
//import EventBox from "../../widget/EventBox/EventBox";
import VisionBox from "../../widget/VisionBox/VisionBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Vision extends Component {

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
                <Header page="vision" />
                <main className="vision" style={{ marginBottom: 10 }}>
                    <article>
                        <h1 className="naslov1">{"NAŠA"}</h1>
                        <h1 className="naslov2">{"VIZIJA"}</h1>
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
                            <h2 className="wrapper-title">{"Naša vizija"}</h2>
                            {
                                this.props.data && this.props.data.visions.map((vision) => {
                                    return <VisionBox 
                                        title={vision.title} 
                                        content={vision.content} 
                                        id={vision.id}
                                        photo={vision.photo}
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

export default Vision;
