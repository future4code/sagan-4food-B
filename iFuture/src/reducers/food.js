const initialState = {
  restaurantsList: []
}

const food = (state = initialState, action) => {

  switch(action.type) {

      case 'SET_RESTAURANTS':
          return {
              ...state,
              restaurantsList: action.payload.restaurantsList
          }

      default:
          return state
  }
}

export default food