import React from "react";
import PropTypes from "prop-types";

const Field = (props) => {
    let id = (props.id % 2 === 0 ? "odd" : "even" );
return(
<div className={"form-k"}>
<label>{props.label}</label>
<input
    onChange={props.onChange}
    type={props.textarea ? 'textarea' : 'text'}
    value={props.value}
/>
</div>
);
};

Field.PropTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired
};

Field.defaultProps = {
    textarea: false,
};

export default Field;