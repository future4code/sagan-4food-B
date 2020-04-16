const initialState = {
  restaurantsList: [],
  restaurantDetails: {
  //   products: [
  //     {
  //       id: "CnKdjU6CyKakQDGHzNln",
  //       category: "Salgado",
  //       price: "1",
  //       photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
  //       name: "Bibsfiha carne",
  //       description: "Esfiha deliciosa, receita secreta do Habibs."
  //     },
  //     {
  //       id: "SmT6MYMm8QC8riHYApzt",
  //       name: "Batata Frita",
  //       description: "Batata frita crocante e sequinha.",
  //       category: "Acompanhamento",
  //       price: "9,50",
  //       photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg"
  //     }
  //   ],
  //   id: "1",
  //   name: "Habibs",
  //   logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
  //   deliveryTime: 60,
  //   category: "Árabe",
  //   description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
  //   shipping: 6,
  //   address: "Rua das Margaridas, 110 - Jardim das Flores"
  // }
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