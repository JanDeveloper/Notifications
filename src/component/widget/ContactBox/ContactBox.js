import React, { Component } from "react";
import PropTypes from "prop-types";
import Field from "./Field"
import Button from "./Button"
//import { ListItem } from "@material-ui/core";

class ContactBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
        this.updateField = this.updateField.bind(this);
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }
    render(){
        return(
            <div className="form">
                <Field 
                label="Ime: "
                onChange={(event) => this.updateField('name', event.target.value)} 
                value={this.state.name} 
                />
                <Field 
                label="Email: "
                onChange={(event) => this.updateField('email', event.target.value)} 
                value={this.state.email} 
                />
                <Field
                label="Poruka: "
                onChange={(event) => this.updateField('message', event.target.value)} 
                textarea={true}
                value={this.state.message} 
                />
                <Button 
                email="somename@mail.com" 
                formValues={this.state} 
                />
            </div>
        );
    }
}

export default ContactBox;



