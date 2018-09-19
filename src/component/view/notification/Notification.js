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
        image: 'http://www.absolat.com/images/promotion-in-marketing.jpg',
        title: '%30 off on sports betting',
        link: 'https://www.google.com/',
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
        itemArray: {},
        newArray: []
    };

    handleAddProject = (x) => {
        this.setState({itemArray: x[0], newArray: x});
        notifications.shift();
    };

    render() {
        return (
            <div className="overview">
                        <div className="circle"><p className="number">{this.state.newArray.length}</p></div>
                <div className="btn" onClick={() => this.handleAddProject(notifications)}></div>
                <div className="top"><p>NOTIFICATIONS</p></div>
                {this.state.itemArray ?
                    <div className="container">
                        
                        <div><p className="title">{this.state.itemArray.title}</p></div>
                        <div><p className="text">{this.state.itemArray.text}</p></div>
                        <div><p className="requirement">{this.state.itemArray.requirement}</p></div>
                        <div><img className="img" alt="promo" src={this.state.itemArray.image} img/></div>
                        <div><a href={this.state.itemArray.link}>Click here</a></div>

                    </div> : <p>{"There is no more notification"}</p>
                }
            </div>
        );
    }
}

export default Notification;
