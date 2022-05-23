import { useSelector } from "react-redux";
import { Button, Input } from "rsuite";
import Message from "./message/Message";
import List from "./list/List";
import React from "react";
import styles from "./Edit.module.css";
const Edit = ({isOpen, setIsOpen}) => {
  const data = useSelector((state) => state.resumeReducer.resumeInfo);
  const contactInfo = data.contactInfo.map((e) => {
    return <Message header={e.header} data={e.data} />;
  });
  const knowledgesSkills = data.knowledgesSkills.map((e) => {
    return (
      <Input as="textarea" value={e.data} rows={4} style={{ resize: "none" }} />
    );
  });
  const education = data.education.map((e) => {
    return (
      <Input as="textarea" value={e.data} rows={1} style={{ resize: "none" }} />
    );
  });
  const anotherInfo = data.anotherInfo.map((e) => {
    return <Message header={e.header} data={e.data} />;
  });
  return (
    <>
      <Message header="Бажана посада:" data={data.desiredPosition} />
      <Message header="Бажана ЗП:" data={data.desiredEarning} />
      <Message header="Дата народження:" data={data.dateOfBirth} />
      <Message header="Місце проживання:" data={data.placeOfResidence} />
      {contactInfo}
      {anotherInfo}
      <Message header="Досвід роботи:" data={data.experience} />
      <List header={"Знання та навички:"} data={knowledgesSkills} />
      <List header={"Освіта:"} data={education} />
      <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
        Save
      </Button>
    </>
  );
};

export default Edit;
