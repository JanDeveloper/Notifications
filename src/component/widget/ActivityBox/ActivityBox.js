import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const ActivityBox = (props) => {
    let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-a"}>

            <div className="date-a">
                <img 
                    className="image" 
                    src={props.photo} 
                    alt="photo"
                />
            </div>
            <div className={"content-box-a-"+id}>
            <div className="content-title-a">
                <h3 className="title-a">{props.title}</h3>
                <p className="date-p-a">{props.month}{", "}{props.date}</p>
                <p className="time-a">{props.day}{", at"} {props.hour}</p>
            </div>
            <div className="content-content-a">
                <p className="content-a">
                    {props.content}
                </p>
            </div>
            </div>
        </div>

    );
};

ActivityBox.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    day: PropTypes.string,
    hour: PropTypes.string,
    photo: PropTypes.img,
    date: PropTypes.number,
    month: PropTypes.string
};

export default ActivityBox;
