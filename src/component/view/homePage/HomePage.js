import React, { Component } from "react";
import Header from "../../layout/header/Header";
import Map from "../../widget/GoogleMap/Map";
import ImageBox from "../../widget/ImageBox/ImageBox";
import Grid from "@material-ui/core/Grid";

class Home extends Component {

    static propTypes = {};

    constructor( props ) {
        super(props);
    }

    render() {
        return (
            <section className="church--wrapper">
                <Header/>
                <main style={{ height: 1000 }}>
                    <article>
                        <h1>{"Dobrodosli na sajt Evandjeoske Crkve Banovo brdo"}</h1>
                        <h3>{"Drago nam je da ste ovde"}</h3>
                    </article>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            Nesto drugo
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ImageBox/>
                        </Grid>
                    </Grid>
                </main>
                <Map/>
            </section>
        );
    }
}

export default Home;
