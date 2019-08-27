import React from "react";
import DayListItem from './DayListItem';

/**
* DayList component will take in three props.

*** days:Array a list of day objects (each object includes an id, name, and spots)
*** day:String the currently selected day
*** setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
**/
export default function DayList(props) {
 return(
   <ul>
      {props.days.map(d =>
      <DayListItem
       key = {d.id}
       name={d.name}
       spots={d.spots}
       selected={props.day === d.name}
       setDay={props.setDay}  />)}
   </ul>
 );
}
