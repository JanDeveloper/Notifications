import React from "react";
import PropTypes from "prop-types";
//import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StickyHeader from "../../widget/StickyHeader/StickyHeader";
//import uuid from "uuid";

const styles = theme => ({
    root: {
        ...theme.typography.button,
        color: theme.palette.common.white,
        padding: theme.spacing.unit,
        display: "inline-block"
    },
});


const Wrapper = ( props ) => {
    return (
        <header className="wrapper">
            <StickyHeader componentClassName="header-church">
                <div className="header-wrapper">
                    <span className="logo"/>
                    
                </div>
            </StickyHeader>
        </header>
    );
};

Wrapper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wrapper);
