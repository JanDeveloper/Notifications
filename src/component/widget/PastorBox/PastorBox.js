import React from "react";
import PropTypes from "prop-types";
//import { ListItem } from "@material-ui/core";



const PastorBox = (props) => {
    //let id = (props.id % 2 === 0 ? "odd" : "even" );

    return (
       
        <div className={"text-box--wrapper-p"}>

            <div><img className={"image-p"} alt="photo" src={props.photo}/></div>
            <div className={"content-box-p"}>
                <p className={"content-p"}>
                    {props.content}
                </p>
            </div>
        </div>

    );
};

PastorBox.propTypes = {
    //id: PropTypes.number,
    //title: PropTypes.string,
    content: PropTypes.string,
    photo: PropTypes.img
};

export default PastorBox;
