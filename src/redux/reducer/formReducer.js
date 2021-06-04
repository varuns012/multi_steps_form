const initialState = [
    {
        id:0,
        name:"",
        age:"",
        gender:"",
        addressone:"",
        streetone:"",
        addresstwo:"",
        streettwo: "",
        phone:"",
        email:"",
        hobbies: ''
    }
];

const formReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_FORMS":
            state = [...state, action.payload];
            return state;
            default:
                return state
    }
}

export default formReducers;