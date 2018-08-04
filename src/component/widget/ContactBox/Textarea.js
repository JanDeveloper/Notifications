import React from "react";
import PropTypes from "prop-types";

const Textarea = (props) => {
return(
<div className={"form-text"}>
<label>{props.label}</label>
<textarea
    onChange={props.onChange}
    type={props.textarea ? 'textarea' : 'text'}
    value={props.value}
>
</textarea>
</div>
);
};

Textarea.PropTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired
};

Textarea.defaultProps = {
    textarea: false,
};

export default Textarea;