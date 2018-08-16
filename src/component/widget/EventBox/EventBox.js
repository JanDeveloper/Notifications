import React from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from 'react-router-hash-link';


const EventBox = (props) => {

    let id = (props.id % 2 === 0 ? "odd" : "even" ); 

    return (

        <div className="text-box--wrapper">
            <div className="date">
                <div className={"date-dd-"+(id)}>
                    <p className={"date-dd-"+(id)}>
                        {props.date}</p>
                </div>
                <div className={"date-mm-"+(id)}><p className={"date-mm-"+(id)}>{props.month}</p></div>
            </div>
            <div className="content-box" id={"event"+props.id}>
                <h3 className="title">{props.title}</h3>
                <p className="content">
                    {props.content}...
                        <Link to={`/events#event${props.id}`}>više</Link>
                </p>
            </div>
        </div>
    );
};
 
EventBox.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    month: PropTypes.string,
    classes: PropTypes.object.isRequired

};



export default EventBox;
