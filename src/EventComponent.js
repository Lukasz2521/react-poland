import React, { Component } from 'react';

export default class EventComponent extends Component {
    constructor(props, context) {
        super(props, context);
    }

    drag(e) {
        e.dataTransfer.setData("text", e.target.id);
    }

    render() {
        return (
            <div onDragStart={(e) => this.drag(e)} id="drag1" className="event q4 past" draggable="true" styles="top: 0px;">
                <p className="hours">08:00 - 09:00</p>
                <p className="description">{this.props.eventData["firstname"]}</p>
                <span className="icon"></span>
            </div>
        );
    }
}