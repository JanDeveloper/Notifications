import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
//import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
//import ImageBox from "../../widget/ImageBox/ImageBox";
//import EventBox from "../../widget/EventBox/EventBox";
import WhoWeAreBox from "../../widget/WhoWeAreBox/WhoWeAreBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class WhoWeAre extends Component {

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
                <Header page="whoWeAre" />
                
                <main style={{ marginBottom: 10 }}>
                    <article className="naslov">
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
                            <h2 className="wrapper-title">{"Ko smo mi?"}</h2>
                            {
                                this.props.data && this.props.data.infos.map((info) => {
                                    return <WhoWeAreBox 
                                        title={info.title} 
                                        content={info.content} 
                                        id={info.id}
                                        photo={info.photo}
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

export default WhoWeAre;
