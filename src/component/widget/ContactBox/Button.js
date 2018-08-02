import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {

    static PropTypes = {
        email: PropTypes.string,
        formVelues: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            message: PropTypes.string,
        }).isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event) {
        console.log('Form Values', this.props.formVelues);
    }
    render() {
        return (
            <button
            disabled={this.state.isClicked}
            onClick={this.logFormDataToConsole}
            >
            Kontaktirajte nas
            </button>
        );
    }
}

export default Button;