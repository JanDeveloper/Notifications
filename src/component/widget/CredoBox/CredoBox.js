import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const CredoBox = (props) => {
    //let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-c"}>

            
            <div className={"content-box-c"}>
                <p className="content-c">
                    {props.content}
                </p>
            </div>
        </div>

    );
};

CredoBox.propTypes = {
    //id: PropTypes.number,
    //title: PropTypes.string,
    content: PropTypes.string,
    //photo: PropTypes.img
};

export default CredoBox;
