import React from 'react';

export const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='container'>
    <div className="row">
    {menuData.map((curElem)=>{
        //array destructuring
        const {id,name,category,image,description}=curElem;

return(
    <>
<div className='col-sm-4 mt-5' key={id}>
    <div className="card">
        <div className="card-body">
            <span className='badge rounded-circlebadge rounded-circle text-dark border'>{id}</span>
        <span className="card-title">{category}</span>
        <h2 className="card-title">{name}</h2>
        <div className='card-text'>
           {description}
        </div>
        <div className='card-link'>Read</div>

        </div>
        <img src={image} alt='Image' className='img-fluid' style={{"maxHeight":"250px"}} /> 
        <button className='btn btn-primary' >Order Now</button>
    </div>
    </div>

    </>
)
    })}
    </div>
    </section>
    </>
  )
}

export default MenuCard;