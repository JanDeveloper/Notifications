import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const ContactBox = (props) => {
    //let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-k"}>

            
            <div className={"content-box-k"}>
                <p className="content-k">
                    {props.content}
                </p>
            </div>
        </div>

    );
};

ContactBox.propTypes = {
    //id: PropTypes.number,
    //title: PropTypes.string,
    content: PropTypes.string,
    //photo: PropTypes.img
};

export default ContactBox;
