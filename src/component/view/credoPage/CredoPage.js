import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
//import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
//import ImageBox from "../../widget/ImageBox/ImageBox";
//import EventBox from "../../widget/EventBox/EventBox";
import CredoBox from "../../widget/CredoBox/CredoBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Credo extends Component {

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
                <Header page="credo" />
                <main className="credos" style={{ height: 700 }}>
                    <article>
                        <h1 className="naslov1">{"ŠTA"}</h1>
                        <h1 className="naslov2">{"VERUJEMO"}</h1>

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
                                this.props.data && this.props.data.credos.map((credo) => {
                                    return <CredoBox 
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

export default Credo;
