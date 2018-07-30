import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StickyHeader from "../../widget/StickyHeader/StickyHeader";
import uuid from "uuid";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom";

const styles = theme => ({
    root: {
        ...theme.typography.button,
        color: theme.palette.common.white,
        padding: theme.spacing.unit,
        display: "inline-block"
    },
});

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
    }/*,
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
    }*/
];

const Header = ( props ) => {
    return (
        <header 
            className={`header ${props.page}`}
        >
            <StickyHeader componentClassName="header-church">
                <div className="header-wrapper">
                    <span className="logo"/>
                    <ul className={`menu-navigation ${props.page}`}>
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
            </StickyHeader>
        </header>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    page: PropTypes.string
};

export default withStyles(styles)(Header);
