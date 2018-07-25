import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const VisionBox = (props) => {
    //let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-v"}>

            
            <div className={"content-box-v"}>
                <h3 className="title-v">{props.title}</h3>
                <p className="content-v">
                    {props.content}
                </p>
            </div>
        </div>

    );
};

VisionBox.propTypes = {
    //id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    //photo: PropTypes.img
};

export default VisionBox;
