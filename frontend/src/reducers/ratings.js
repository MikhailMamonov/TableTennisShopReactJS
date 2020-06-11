import {SET_RATING, GET_CURRENT_RATING} from "./../constants/action-types"

const initialState = {
  ratings : [
    {id:"1",  name: "Накладки", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg",
      elements: ["Butterfly Tenergy 05", "DHS NEO Hurricane 3",
    "	Donic Baracuda", "Yasaka Rakza 7", "Yasaka Mark V"],
   creterias: ["Speed", "Spin", "	Control", "Tacky", "Weight",
    "Sponge Hardness", "Gears", "Throw Angle", "Consistency", "Durable", "Overall", "Ratings", "Price"	] },

    {id:"2",  name: "Основания", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg", 
    elements: ["Andro Gauzy SL OFF", "Donic Persson World Champion 89",
     "Butterfly Kenta Matsudaira ALC", "Yasaka Reinforce LT", "Nittaku Violin Carbon Inner"],
    creterias: ["Speed", "Control", "Stiffness", "Hardness", "Consistency", "Overall", "Ratings", "Price"] },
    {id:"3",  name: "Шипы", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"}
   ],

    currentRating: 0,
    categoryText: "Выберите категорию рейтинга"
}


const ratings = (state = initialState, action) => {
  debugger;
  switch (action.type) {
      case SET_RATING:
        debugger;
      return {
        ...state,
        currentRating: action.newRating
    };
      
    default:
      return state}
}

export let setRatingCreator = ((rating) => ({
  type: SET_RATING,
  newRating: rating
}))


export const getCurrentRatingCreator = ((ratingId) => ({
    type: GET_CURRENT_RATING,
    id: ratingId
}));

export default ratings