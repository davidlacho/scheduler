import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  return(
    <section class="interviewers">
    <h4 class="interviewers__header text--light">Interviewer</h4>
    <ul class="interviewers__list">
    {props.interviewers.map(i => {
      return(
        <InterviewerListItem
        key={i.id}
        name={i.name}
        avatar={i.avatar}
        selected={i.name === props.name}
        setInterviewer= {(n) => {console.log(n)}}
        />
      );
    })}
    </ul>
    </section>
  );

}
