const initialState = {
    user: {
        id: "De8UACSFgFySnKdXm5hI",
        name: "Astrodev",
        email: "astrodev@future4.com",
        cpf: "111.111.111-11",
        hasAddress: true,
        address: "R. Afonso Braz, 177 - Vila N. Conceição"
    }
}

const user = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_PROFILE':
            return {
                ...state,
                user: action.payload.info
            }

        default:
            return state
    }
}

export default user