/* @ReactComponet Component 'Calendar'.
*  @Desc:  	.
*
*  @author:  	Mark Wybrow
*  @date:    	// 2018
*/

import '../../../node_modules/fullcalendar/dist/fullcalendar.css';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import './calendar-styles.css';

import React, { Component } from 'react';

import $ from 'jquery';
import { fullCalendar } from 'fullcalendar';

export default class Calendar extends Component {
  render() {
    return <div id="calendar" />;
  }

  componentDidMount() {
    let _calendar = document.getElementById('calendar');

    $(_calendar).fullCalendar({
      themeSystem: 'bootstrap4',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          console.log('REMOVE');
          // if so, remove the element from the "Draggable Events" list
          //TODO: $(this).remove();
        }
      }
    });
  }
}
