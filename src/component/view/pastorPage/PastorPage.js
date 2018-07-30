import React, { Component } from "react";
import PropTypes from "prop-types";
import Header_p from "../../layout/header/Header_p";
//import Wrapper from "../../layout/wrapper/Wrapper";
import Map from "../../widget/GoogleMap/Map";
//import ImageBox from "../../widget/ImageBox/ImageBox";
//import EventBox from "../../widget/EventBox/EventBox";
import PastorBox from "../../widget/PastorBox/PastorBox";
import Grid from "@material-ui/core/Grid";
import Footer from "../../layout/footer/Footer";



class Pastor extends Component {

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
                <Header_p/>
                <main className="pastor" style={{ height: 600 }}>
                    <article>
                        <h1 className="naslov1">{"REČ"}</h1>
                        <h1 className="naslov2">{"PASTORA"}</h1>

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
                                this.props.data && this.props.data.pastors.map((pastor) => {
                                    return <PastorBox 
                                        photo={pastor.photo}
                                        content={pastor.content} 
                                        id={pastor.id}
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

export default Pastor;
