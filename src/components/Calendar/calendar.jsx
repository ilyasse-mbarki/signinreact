import { Component } from 'react';
import React, { useState } from 'react';
import './calendar.css'

export default class Calendar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      days : [
        {day :1},{day :2},{day :3},{day :4},{day :5},{day :6},{day :7},{day :8},{day :9},
        {day :10},{day :11},{day :12},{day :13},{day :14},{day :15},{day :16},{day :17},{day :18},
        {day :19},{day :20},{day :21},{day :22},{day :23},{day :24},{day :25},{day :26},{day :27}
        ,{day :28},{day :29},{day :30},{day :31}
      ]
      };

  }



  render()
  {



    var dt = new Date();

 var month = dt.getMonth() + 1;
 var year = dt.getFullYear();
 var daysInMonth = new Date(year, month, 0).getDate();
 console.log(daysInMonth);
 const items = [];


 var date = new Date();
date.setMonth(date.getMonth())
var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
var lastDayOfLastMonth = lastDay.toISOString().substr(8, 2);


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthNumber = new Date();
var currentmonth=monthNames[monthNumber.getMonth()];
console.log(currentmonth);

var todayDate = new Date();
todayDate.setDate(todayDate.getDay())
var today = todayDate.toISOString().substr(8,2);


   for (var i = 0 ; i<daysInMonth;i++) {
     if(i===0)
     {
      items.push(<div className="LastDay" key={lastDayOfLastMonth}><button>{lastDayOfLastMonth}</button></div>)

     }

        items.push(<div  className="DayCalendar" key={this.state.days[i].day}><button>{this.state.days[i].day}</button></div>)


  }
return(


  <div className="containerDiv" >

        <div className="currentMonth">
        <ul>{currentmonth}</ul>
      </div>
      <div id="transparency">

        {items}
      </div>
  </div>
);

  }

}
