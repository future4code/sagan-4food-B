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
        const copyInfoQuantity = [...state.infoQuantity]

        // checo se já tem o produto
        const productExist = state.infoQuantity.findIndex(product => 
          product.id === action.payload.infoQuantity.id)
        
        // se já tem, só acrescento a quantidade
        if(productExist > -1){
          copyInfoQuantity[productExist].quantity += action.payload.infoQuantity.quantity
        } else {
          copyInfoQuantity.push(action.payload.infoQuantity)
        }
        console.log(copyInfoQuantity)
      
        return {
          ...state,
          infoQuantity: copyInfoQuantity
        }

      default:
          return state
  }
}

export default food