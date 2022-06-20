import { Input } from "rsuite";
import Message from "./message/Message";
import List from "./list/List";
import React, { useEffect, useState } from "react";
import ButtonSignUp from "../../Main/button/ButtonSignUp";
import { addInfo, deleteInfo, getInfo } from "../../../firebase/firebaseCalls";
import styles from "./Edit.module.css"

const Edit = ({ isOpen, setIsOpen }) => {

  const [newData, setNewData] = useState({});

  useEffect(() => {
    getInfo(setNewData, "dataFinalProject");
  }, []);

  useEffect(() => {
    console.log(newData);
  }, [newData]);

  const contactInfo =
    newData?.contactInfo &&
    newData.contactInfo.map((e, index) => {
      return (
        <Message
          header={e.header}
          data={e.data}
          onChange={(data) => {
            let contactInfo = [...newData.contactInfo];
            contactInfo.splice(index, 1, { header: e.header, data })
            setNewData({
              ...newData,
              contactInfo: [
                ...contactInfo
              ],
            });
          }}
        />
      );
    });

  const knowledgesSkills =
    newData?.knowledgesSkills &&
    newData.knowledgesSkills.map((e, index) => {
      return (
        <Input
          as="textarea"
          value={e.data}
          rows={4}
          style={{ resize: "none", marginBottom: "15px", marginTop: "7.5px" }}
          onChange={(data) => {
            let knowledge = [...newData.knowledgesSkills];
            knowledge.splice(index, 1, { data })
            setNewData({
              ...newData,
              knowledgesSkills: [
                ...knowledge,
              ],
            });
          }}
        />
      );
    });

  const education =
    newData?.education &&
    newData.education.map((e, index) => {
      return (
        <Input
          as="textarea"
          value={e.data}
          rows={1}
          style={{ resize: "none", marginBottom: "15px", marginTop: "0" }}
          onChange={(data) => {
            let education = [...newData.education];
            education.splice(index, 1, { data })
            setNewData({
              ...newData,
              education: [
                ...education
              ],
            });
          }}
        />
      );
    });

  const anotherInfo =
    newData?.anotherInfo &&
    newData.anotherInfo.map((e, index) => {
      return (
        <Message
          header={e.header}
          data={e.data}
          onChange={(data) => {
            let anotherInfo = [...newData.anotherInfo];
            anotherInfo.splice(index, 1, { header: e.header, data })
            setNewData({
              ...newData,
              anotherInfo: [
                ...anotherInfo,
              ],
            });
          }}
        />
      );
    });

  return (
    <div className={styles.wrapper}>
      <Message
        header="Ім'я та прізвище:"
        data={newData.name}
        onChange={(e) => {
          setNewData({
            ...newData,
            name: e,
          });
        }}
      />
      <Message
        header="Бажана посада:"
        data={newData.desiredPosition}
        onChange={(e) => {
          setNewData({
            ...newData,
            desiredPosition: e,
          });
        }}
      />
      <Message
        header="Бажана ЗП:"
        data={newData.desiredEarning}
        onChange={(e) => {
          setNewData({
            ...newData,
            desiredEarning: e,
          });
        }}
      />
      <Message
        header="Дата народження:"
        data={newData.dateOfBirth}
        onChange={(e) => {
          setNewData({
            ...newData,
            dateOfBirth: e,
          });
        }}
      />
      <Message
        header="Місце проживання:"
        data={newData.placeOfResidence}
        onChange={(e) => {
          setNewData({
            ...newData,
            placeOfResidence: e,
          });
        }}
      />
      {contactInfo}
      {anotherInfo}
      <Message
        header="Досвід роботи:"
        data={newData.experience}
        onChange={(e) => {
          setNewData({
            ...newData,
            experience: e,
          });
        }}
      />
      <List header={"Знання та навички:"} data={knowledgesSkills} />
      <List header={"Освіта:"} data={education} />
      <ButtonSignUp
        func={() => {
          setIsOpen(!isOpen);
          addInfo(newData, "dataFinalProject");
          deleteInfo("dataFinalProject", newData.id);
        }}
        text="Зберегти зміни"
        path="/"
      />
    </div>
  );
};

export default Edit;
