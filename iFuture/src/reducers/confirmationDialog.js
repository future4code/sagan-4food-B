const initialState = {
    dialogOpen: false
}

const confirmationDialog = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_DIALOG':
            return {
                ...state,
                dialogOpen: action.payload.option
            }

        default:
            return state
    }
}

export default confirmationDialog