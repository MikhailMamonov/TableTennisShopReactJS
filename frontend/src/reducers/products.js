
import {SET_CATEGORY} from "../constants/action-types"

const initialState = {
  products : [
    {id:1, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:2, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:3, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:4, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:5, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:6, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:7, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:8, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:9, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:10, category:1, label: "Timo Boll", image:"https://www.vistasport.ru/upload/iblock/dba/dba3233e02c4b547e02896d61af28c0b.jpg"},
    {id:11, category:2, label: "Butterfly s40+", image:"https://www.vistasport.ru/upload/iblock/207/2074ea4496eabb5152429714603deeb9.jpg"},
    {id:12, category:2, label: "Butterfly s40+", image:"https://www.vistasport.ru/upload/iblock/207/2074ea4496eabb5152429714603deeb9.jpg"},
    {id:13, category:3, label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg"},
    {id:14, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:15, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:16, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:17, category:3, label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg"},
    {id:18, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:19, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:20, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:21, category:3, label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg"},
    {id:22, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:23, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:24, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:25, category:3, label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg"},
    {id:26, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:27, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:28, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:29, category:3, label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg"},
    {id:30, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:31, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:32, category:4, label: "Butterfly Kisa", image:"https://www.vistasport.ru/upload/iblock/4ed/4edc02bf168c90d1eb22bc6653ddf69b.jpg"},
    {id:33, category:3, label: "Butterfly Digins", image:"https://www.vistasport.ru/upload/iblock/900/900a88d12e3d47acf3759ce4bab5e36a.jpg"},
    {id:34, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:35, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"},
    {id:36, category:5, label: "BUTTERFLY Radial Cross", image:"https://www.vistasport.ru/upload/iblock/5ed/5ed7fec240713e313350d7b647823061.jpg"}  ],
    
    brands : [
      { id: 1, text: "stiga" },
      { id: 2, text: "butterfly" },
      { id: 3, text: "Donic" },
      { id: 4, text: "yasaka" },
      { id: 5, text: "xiom" },
      { id: 6, text: "tibhar" },
      { id: 7, text: "dhs" },
      { id: 8, text: "friendship" },
    ],

    categories:  [
      {id: 1, src: "https://www.vistasport.ru/upload/uf/dde/dde51349dd4ff63d4413ef1833d34897.svg", text: "Накладки"},
        {id:2, src: "https://www.vistasport.ru/upload/uf/02e/02e45e38fc2dbcd8f100bd646f3ceb41.svg", text: "Основания"},
        {id:3, src: "https://www.vistasport.ru/upload/uf/f38/f3813bc592911d3a0da019a6f8c21643.svg",text:"Мячи" },
        {id:4, src: "https://www.vistasport.ru/upload/uf/f38/f3813bc592911d3a0da019a6f8c21643.svg",text:"Одежда" },
        {id:5, src: "https://www.vistasport.ru/upload/uf/dbb/dbb7d8113be06a0376bd47c72cc36175.svg",text:"Обувь" }
    ],
    
    displayCategory: 0,
    categoryText: "All"
}


const products = (state = initialState, action) => {
  debugger;
  switch (action.type) {
      case SET_CATEGORY:
        debugger;
      return {
        ...state,
        displayCategory: action.newDisplayCategory,
        categoryText: action.categoryText
    };
         
    default:
      return state}
}

export let setCategoryCreator = ((category,text) => ({
  type: SET_CATEGORY,
  newDisplayCategory: category,
  categoryText:text
}))

export let updateNewMessageTextCreator = ((text) => ({
  type: "UPDATE-NEW-MESSAGE-BODY",
  newMessageBody: text
}))

export default products