import { Input } from "rsuite";
import Message from "./message/Message";
import List from "./list/List";
import React, { useEffect, useState } from "react";
import ButtonSignUp from "../../Main/button/ButtonSignUp";
import { addInfo, deleteInfo, getInfo } from "../../../firebase/firebaseCalls";

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
    newData.contactInfo.map((e) => {
      return (
        <Message
          header={e.header}
          data={e.data}
          onChange={(data) => {
            setNewData({
              ...newData,
              contactInfo: [
                ...contactInfo,
                {
                  header: e.header,
                  data: data,
                },
              ],
            });
          }}
        />
      );
    });

  const knowledgesSkills =
    newData?.knowledgesSkills &&
    newData.knowledgesSkills.map((e) => {
      return (
        <Input
          as="textarea"
          value={e.data}
          rows={4}
          style={{ resize: "none", marginBottom: "15px", marginTop: "7.5px" }}
          onChange={(data) => {
            setNewData({
              ...newData,
              knowledgesSkills: [
                ...knowledgesSkills,
                {
                  data: data,
                },
              ],
            });
          }}
        />
      );
    });

  const education =
    newData?.education &&
    newData.education.map((e) => {
      return (
        <Input
          as="textarea"
          value={e.data}
          rows={1}
          style={{ resize: "none", marginBottom: "15px", marginTop: "0" }}
          onChange={(data) => {
            setNewData({
              ...newData,
              education: [
                ...education,
                {
                  data: data,
                },
              ],
            });
          }}
        />
      );
    });

  const anotherInfo =
    newData?.anotherInfo &&
    newData.anotherInfo.map((e) => {
      return (
        <Message
          header={e.header}
          data={e.data}
          onChange={(data) => {
            setNewData({
              ...newData,
              anotherInfo: [
                ...anotherInfo,
                {
                  header: e.header,
                  data: data,
                },
              ],
            });
          }}
        />
      );
    });

  return (
    <>
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
        text="Save Changes"
        path="/"
      />
    </>
  );
};

export default Edit;
