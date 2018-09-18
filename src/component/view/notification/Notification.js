import React, {Component} from "react";

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

class Notification extends Component {
    state = {
        itemArray: {}
    };

    handleAddProject = (x) => {
        this.setState({itemArray: x[0]});
        notifications.shift();
    };

    render() {
        return (
            <div className="Overview">
                <button onClick={() => this.handleAddProject(notifications)}>New Project</button>
                {this.state.itemArray ?
                    <div>
                        <p>{this.state.itemArray.id}</p>
                    </div> : <p>{"There is no more notification"}</p>
                }
            </div>
        );
    }
}

export default Notification;
