import React from "react";
import PropTypes from "prop-types";

const Field = (props) => {

return(
<div>
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
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    textarea: PropTypes.bool
};

Field.defaultProps = {
    textarea: false,
};

export default Field;