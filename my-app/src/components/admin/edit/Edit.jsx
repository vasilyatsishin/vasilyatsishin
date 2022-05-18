import { useSelector } from "react-redux";
import Message from "./message/Message";

const Edit = () => {
  const data = useSelector((state) => state.resumeReducer.resumeInfo);
  return (
    <>
      <Message header="Бажана посада" data={data.desiredPosition} />
      <Message header="Бажана ЗП:" data={data.desiredEarning} />
      <Message header="Дата народження:" data={data.dateOfBirth} />
      <Message header="Контактна інформація:" data={data.contactInfo} />
    </>
  );
};

export default Edit;
