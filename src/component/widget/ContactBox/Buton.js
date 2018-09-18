import React, {Component} from "react";
import Notification from './Notification';

const notifications = [
    {
        id: 1321,
        type: 'text',
        title: 'Test notification',
        text: 'Test text notification',
        expires: 3600
    },
    {
        id: 4322,
        type: 'bonus',
        title: 'You win a bonus!',
        requirement: 'Deposit $50 to win',
        expires: 3600
    },
    {
        id: 5453,
        type: 'Promotion',
        image: '    http://www.absolat.com/images/promotion-in-marketing.jpg',
        title: '%30 off on sports betting',
        link: '    https://www.google.com/',
    },
    {
        id: 5236,
        type: 'text',
        title: 'Test notification',
        text: 'Test text notification',
        expires: 5
    }];

class Button extends Component {
    constructor() {
        super();
        this.handleAddProject.bind(this);
    }

    state = {
        itemArray: []
    };

    handleAddProject = () => {
        notifications.pop();
        this.setState({
            itemArray: notifications[0]
        });
    };

    render() {
        return (
            <div className="Overview">
                <button onClick={() => this.handleAddProject(notifications)}>New Project</button>
                <div>
                <Notification itemArray={this.state.itemArray}/>
                </div>
            </div>
        );
    }
}

export default Button;