const initialState = {
  restaurantsList: [],
  restaurantDetails: {},
  infoQuantity: [],
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

      case 'SET_QUANTITY':
        // console.log(action.payload.infoQuantity)
        const copyInfoQuantity = [...state.infoQuantity]
        const newInfoQuantity = [copyInfoQuantity, action.payload.infoQuantity]
        // console.log(newInfoQuantity)
        return {
          ...state,
          infoQuantity: newInfoQuantity
        }

      default:
          return state
  }
}

export default food