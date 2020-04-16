const initialState = {
  restaurantsList: [],
  restaurantDetails: {
}
}

const food = (state = initialState, action) => {

  switch(action.type) {

      case 'SET_RESTAURANTS':
          return {
              ...state,
              restaurantsList: action.payload.restaurantsList
          }
      case 'SET_RESTAURANT_DETAILS':
        return {
          ...state,
          restaurantDetails: action.payload.restaurantDetails
        }
      default:
          return state
  }
}

export default food