import React from 'react'
import Menu from './menuApi';
import MenuCard from './menuCard';
import NavBar from './NavBar';

const uniqueList = [...new Set(Menu.map((curElem)=>{
       return curElem.category;
})),"All"
]; // spread operator to convert object to array
console.log(uniqueList);

const Resturant = () => {
    const [menuData,setMenuData] = React.useState(Menu);
    const [menuList,setMenuList] = React.useState(uniqueList);

    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        })
        setMenuData(updatedList);
    };
  return (
    <>
    <NavBar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant;