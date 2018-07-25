import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const WhoWeAreBox = (props) => {
    //let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-i"}>

            
            <div className={"content-box-i"}>
                <h3 className="title-i">{props.title}</h3>
                <p className="content-i">
                    {props.content}
                </p>
            </div>
        </div>

    );
};

WhoWeAreBox.propTypes = {
    //id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    //photo: PropTypes.img
};

export default WhoWeAreBox;
