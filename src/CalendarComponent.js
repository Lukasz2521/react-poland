import React, { Component } from 'react';
import EventComponent from './EventComponent';

export default class CalendarComponent extends Component {

    constructor() {
        super();
        this.state = {
            "id": 1,
            doctor: {
                "account_id": 7,
                "id": 1,
                "title": "Blue Walker"
            },
            patient: {
                "id": 2,
                "salutation": "Mrs.",
                "firstname": "Anna",
                "lastname": "A.",
                "gender": 0,
                "notify_email": false,
                "notify_sms": false,
                "language": "de"
            },
            "start_time": "2015-11-11 09:00:00",
            "end_time": "2015-11-11 10:00:00",
            "start_hour": 0,
            "day_number": 1
        };
    }

    handleDragStart(e) {
        this.style.opacity = '0.4';
    }

    allowDrop(e) {
        e.preventDefault();
    }

    drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }

    createDays(initHour = 0) {
        let daysList = [];
        for (let days = 7, i = 0; i < days; i++) {
            daysList.push(
                <td onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)} >
                    {
                        i == 0 && initHour == 0
                            ? <EventComponent
                                // key={eventItem.id}
                                    eventData={this.state.patient}
                                    // actualDate={this.state.actualDate}
                                    // onClickEvent={this.props.onEventClick}
                                />
                            : ""
                    }
                </td>
            );
        }

        return daysList;
    }

    createHours() {
        let hoursList = [];
        for (let hours = 24, i = 0; i < hours; i++) {
            hoursList.push(
                <tr>
                    <td className="hour">08:00</td>
                    {this.createDays(i)}
                </tr>
            );
        }

        return hoursList;
    }

    render() {
        return (
            <div className="table">
            <table>
              <thead>
                <tr>
                  <td>Uhrzeit</td>
                  <td>Mo 06.07.</td>
                  <td>Di 07.07.</td>
                  <td className="active">Mi 08.07.</td>
                  <td>Do 09.07.</td>
                  <td>Fr 10.07.</td>
                  <td className="free" >Sa 11.07.</td>
                  <td className="free" >So 12.07.</td>
                </tr>
              </thead>
              <tbody>
                {this.createHours()}
              </tbody>
            </table>
          </div>
        );
    }
}


