import React, { Component } from 'react';
import { formatDate, getlocaleTime } from '../../utils';

import FontAwesome from 'react-fontawesome';
import { FormattedTime } from 'react-intl';

const CourseCard = ({ meta }) => {
    const data = meta;

    return (
        <div className="col-md- col-sm- col-lg-6">
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4>{data.Name}</h4>
                </div>

                <div className="card-body container">
                    <div className="row">
                        <div className="col-md">
                            {data.Course_Summary__c}
                        </div>
                    </div>
                </div>
                <span class="glyphicon glyphicon-print"></span>
            </div>
        </div>
    );
};

export default CourseCard;
