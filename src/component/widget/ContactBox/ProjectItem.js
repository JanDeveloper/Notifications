import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    
  render() {
    return (
      <li className="Project">
      {this.props.notification && <strong>{this.props.notification.title}{this.props.notification.type}</strong> }
      </li>
    );
  }
}
ProjectItem.propTypes = {
    notification: PropTypes.array,
}

export default ProjectItem;