import React from 'react'

const ItemList = () => {
  return (
    <a href="#" className='list-group-item list-group-item-action'>
        <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>Título</h5>
        </div>
        <p className='mb-1'>Contenido</p>
    </a>
  )
}

export default ItemList
