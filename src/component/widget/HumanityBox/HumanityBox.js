import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const HumanityBox = (props) => {
    //let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-h"}>

            
            <div className={"content-box-h"}>
                <p className="content-h">
                    {props.content}
                </p>
            </div>
        </div>

    );
};

HumanityBox.propTypes = {
    //id: PropTypes.number,
    //title: PropTypes.string,
    content: PropTypes.string,
    //photo: PropTypes.img
};

export default HumanityBox;
