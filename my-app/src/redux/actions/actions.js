export const actions = {
    setData: (data) => 
        ({type: "SET_DATA", payload: data})
    ,
    getData: () => 
        ({type: "GET_DATA"})
}