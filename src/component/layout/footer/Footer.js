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

const navItem = [ "Home", "Ko smo mi?", "Vizija", "Šta verujemo", "Reč Pastora", "Aktivnosti", "Humanitarni rad", "Kontakt" ];

const Footer = ( props ) => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <span className="logo"/>
                <div className="container">
                    <ul className="footer-navigation">
                        {
                            navItem.map(item => {
                                return (
                                    <Typography
                                        key={uuid.v4()}
                                        className={props.classes.root}
                                        variant="subheading"
                                        gutterBottom
                                    >
                                        {item}
                                    </Typography>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
