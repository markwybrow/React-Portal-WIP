import React, { Component } from 'react';
import { formatDate, getlocaleTime } from '../../utils';

import FontAwesome from 'react-fontawesome';
import { FormattedTime } from 'react-intl';
import { Link } from 'react-router-dom';

const StudentSessionCard = ({ meta }) => {
  const data = meta;

  return (
    <div className="col-md- col-sm- col-lg-4">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4>{data.Name}</h4>
        </div>

        <div className="card-body container">
          <div className="text-left">
            <div className="row">
              <div className="col">Session</div>
              <div className="flex-grow-1 text-center">
                <a href="javascript:;">{data.Session__r.Name}</a>
              </div>
            </div>
            <div className="row">
              <div className="col">Date</div>
              <div className="flex-grow-1 text-left">
                {formatDate(data.Formatted_Start_Date__c)}
              </div>
            </div>
            <div className="row ">
              <div className="col">Time</div>
              <div className="flex-grow-1 text-left">
                {getlocaleTime(data.Start_Date_Time__c)}&nbsp;to&nbsp;
                {getlocaleTime(data.End_Date_Time__c)}
              </div>
            </div>
            <div className="row">
              <div className="col">Tutor</div>
              <div className="flex-grow-1 text-left">{data.Tutor_Name__c}</div>
            </div>
            <div className="row">
              <div className="col">Status</div>
              <div className="flex-grow-1 text-left">
                {data.Status__c} <FontAwesome name="info" />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer cCard-footer">
          <ul className="nav nav-pills flex-row ">
            <li className="nav-item cLink-first">
              <Link to="calendar">
                RESCHEDULE
              </Link>
            </li>
            <li className="nav-item cLink-last">
              <Link to="schedule">VIEW SCHEDULE</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentSessionCard;
