let initialState = {
  resumeInfo: {
    desiredPosition: "програміст-стажер(Trainee)",
    desiredEarning: "5.000 грн.",
    dateOfBirth: "31.03.2006",
    placeOfResidence: "м.Львів",
    contactInfo: [
      { header: "Номер телефону: ", data: "+380982312450" },
      { header: "Електронна пошта: ", data: "vasylyatsishin@gmail.com" },
    ],
    knowledgesSkills: [
      {
        data: "Знання таких мов програмування як HTML, CSS, JS та JavaScript бібліотек React, JQuery",
      },
      {
        data: "відповідальність, швидке прийняття рішень, вміння працювати в команді, терпеливість, бажання вчитись",
      },
    ],
    experience: "немає",
    education: [
      { data: "Ampli IT School - 2021p." },
      { data: "Logos IT Academy - 2022p." },
    ],
    anotherInfo: [
      {
        header: "Знання іноземних мов: ",
        data: "українська, англійська, російська",
      },
    ],
  },
};

const resumeReducer = (action, state = initialState) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        resumeInfo: action.payload,
      };
    case "GET_DATA":
      return state;
    default:
      return state;
  }
};

export default resumeReducer;
