import React from "react";
import classes from "./Navbar.module.css";
import ButtonCategory from "./ButtonCategory/ButtonCategory";






const Navbar = (props) =>  {
        debugger;
        const links = [{id: 1, src: "https://www.vistasport.ru/upload/uf/dde/dde51349dd4ff63d4413ef1833d34897.svg", text: "Накладки"},
        {id:2, src: "https://www.vistasport.ru/upload/uf/02e/02e45e38fc2dbcd8f100bd646f3ceb41.svg", text: "Основания"},
        {id:3, src: "https://www.vistasport.ru/upload/uf/f38/f3813bc592911d3a0da019a6f8c21643.svg",text:"Мячи" },
        {id:4, src: "https://www.vistasport.ru/upload/uf/f38/f3813bc592911d3a0da019a6f8c21643.svg",text:"Одежда" },
        {id:5, src: "https://www.vistasport.ru/upload/uf/dbb/dbb7d8113be06a0376bd47c72cc36175.svg",text:"Обувь" }]
        const navItems = links.map(link => (
            <li  className = {classes.nli}>
            <ButtonCategory id = {link.id} src = {link.src} text = {link.text} setCategory = {props.setCategory}></ButtonCategory> 
            </li>
  ));
    return  <div className={classes.ratings__Nav}>             
        <div className={classes.nul}>
            {navItems}
           </div>
           </div>
        
}

export default Navbar;
