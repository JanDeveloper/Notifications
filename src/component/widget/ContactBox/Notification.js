import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Notification extends Component {
    
  render() {
    return (
    <ProjectItem notification={this.props.notification} />
    )
  }
}
Notification.propTypes = {
    notification: PropTypes.array
}

export default Notification;