import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StickyHeader from "../../widget/StickyHeader/StickyHeader";
import uuid from "uuid";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom";

const navEvent = ["Ostali Događaji"];

const newNavEvent =[
    {
        "link": "/events",
        "name": "Ostali Događaji"
    }];

const EventNavBox = ( props ) => {
    return (
                <div className={"event-navigation"}>
                    <ul>
                        {
                            newNavEvent.map(event => {
                                return (
                                   <a 
                                        href={event.link}
                                    >
                                        {event.name} 
                                   </a>
                                );
                            })
                        }
                    </ul>
                </div>
    );
};
EventNavBox.propTypes = {
    classes: PropTypes.object.isRequired
};


export default EventNavBox;