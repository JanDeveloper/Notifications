import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
//import StickyHeader from "../../widget/StickyHeader/StickyHeader";
import uuid from "uuid";

const styles = theme => ({
    root: {
        ...theme.typography.button,
        color: theme.palette.common.white,
        padding: theme.spacing.unit,
        display: "inline-block"
    },
});


    const url = 'https://www.facebook.com/Evan%C4%91eoska-crkva-Banovo-brdo-Beograd-223951751425314/';

const navItem = [ "Home", "Ko smo mi?", "Vizija", "Šta verujemo", "Reč Pastora", "Aktivnosti", "Humanitarni rad", "Kontakt" ];

const newNavItem = [
    {
        "link": "/start",
        "name": "Home"
    }, 
    {
        "link": "/whoweare",
        "name": "Ko smo mi?"
    },
    {
        "link": "/vision",
        "name": "Vizija"
    },
    {
        "link": "/credo",
        "name": "Šta verujemo"
    },
    {
        "link": "/pastor",
        "name": "Reč pastora"
    },
    {
        "link": "/activity",
        "name": "Aktivnosti"
    },
    {
        "link": "/humanity",
        "name": "Humanitarni rad"
    },
    {
        "link": "/contact",
        "name": "Kontakt"
    }
];
const Footer = ( props ) => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <span className="logo"/>
                <div className="container">
                    <ul className="footer-navigation">
                        {
                            newNavItem.map(item => {
                                return (
                                   <a 
                                        key={uuid.v4()}
                                        className={props.classes.root}
                                        href={item.link}
                                    >
                                        {item.name} 
                                   </a>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="img"><a style={{display: "table-cell"}} href={url} target="_blank"><img src="../../../src/www/img/fb5.png" className="fb" alt="fb_logo"/></a></div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
