import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StickyHeader from "../../widget/StickyHeader/StickyHeader";

const styles = theme => ({
    root: {
        ...theme.typography.button,
        color: theme.palette.common.white,
        padding: theme.spacing.unit,
        display: "inline-block"
    },
});

const navItem = [ "Home", "Ko smo mi ?", "Vizija", "Sta verujemo", "Rec Pastora", "Aktivnosti", "Humanitarni rad", "Kontakt" ];

const Header = ( props ) => {
    return (
        <header className="header">
            <StickyHeader componentClassName="header-church">
                <div className="header-wrapper">
                    <span className="logo"/>
                    <ul className="menu-navigation">
                        {
                            navItem.map(item => {
                                return (<Typography
                                        className={props.classes.root}
                                        variant="subheading"
                                        gutterBottom
                                    >
                                        {item}
                                    </Typography>
                                )
                            })
                        }
                    </ul>
                </div>
            </StickyHeader>
        </header>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
