import React from "react";
import "./InterviewerListItem.scss";
import classNames from 'classnames';



export default function InterviewerListItem(props) {

  var interviewerListItemClass = classNames({
    'interviewers__item': true,
    'interviewers__item--selected': props.selected,
    // 'interviewers__item--clickable':
  });

  var interviewerListItemImageClass = classNames({
    'interviewers__item-image': true,
    'interviewers__item---selected-image': props.selected
  });

  return(
      <li
        className={interviewerListItemClass}
        onClick={() => props.setInterviewer(props.name)}>
          <img
            className={interviewerListItemImageClass}
            src={props.avatar}
            alt={props.name}
          />
        {props.name}
      </li>
    );
}
