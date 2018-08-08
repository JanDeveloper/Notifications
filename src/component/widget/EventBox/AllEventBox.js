import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const AllEventBox = (props) => {

    let id = (props.id % 2 === 0 ? "odd" : "even" ); 

    return (

        <div className="text-box--events">
            <div className={"content-box-"+(id)}>
            <p className={"dates"}>
                        {props.date}, {props.month}</p>
                <h3 className="title">{props.title}</h3>
                <p className="content">
                    {props.content}
                </p>
            </div>
        </div>
    );
};
 
AllEventBox.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    month: PropTypes.string

};



export default AllEventBox;
