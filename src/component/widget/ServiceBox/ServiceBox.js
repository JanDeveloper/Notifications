import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const ServiceBox = (props) => {
    let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-s"}>

            <div className="date-s">
                <img 
                    className="image" 
                    src={props.photo} 
                    alt="photo"
                />
            </div>
            <div className={"content-box-s-"+id}>
                <h3 className="title-s">{props.title}</h3>
                <p className="time-s">{props.day}{", at"} {props.hour}</p>
                <p className="content-s">
                    {props.content}
                </p>
            </div>
        </div>

    );
};

ServiceBox.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    day: PropTypes.string,
    hour: PropTypes.string,
    photo: PropTypes.img
};

export default ServiceBox;
