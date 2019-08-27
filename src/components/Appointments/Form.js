import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";

export default function Form(props) {
  const [name, setName] = useState(props.name);
  const [interviewer, setInterviewer] = useState(1);

  function reset() {
    setName("");
    setInterviewer(null);
  }

  function cancel() {
    reset();
    props.onCancel();
  }

  return(
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          onChange={e => setName(e.target.value)}
          value={name}/>
      </form>
      <InterviewerList
        interviewers={props.interviewers}
        interviewer={props.interviewer}
        value={interviewer}
        onChange={setInterviewer}
        />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button
          danger
          onClick={cancel}>
            Cancel
        </Button>
        <Button
          confirm
          onClick={() => props.onSave(name, interviewer)}>
            Save
        </Button>
      </section>
    </section>
  </main>
  );

}
