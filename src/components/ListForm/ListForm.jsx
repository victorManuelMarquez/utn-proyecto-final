import React from 'react'

const ListForm = () => {
  return (
    <form action="" className='py-4'>
      <div className='mb-3'>
        <label htmlFor="title" className='form-label'>Título</label>
        <input id='title' type="text" className='form-control'/>
      </div>
      <div className='mb-3'>
        <label htmlFor="description">Descripción</label>
        <textarea name="" id="description" className='form-control'></textarea>
      </div>
      <div className='mb-3'>
        <div className='row g-3'>
          <div className='col-auto'>
            <label htmlFor="taskStart" className='form-label'>Inicia</label>
            <input type="datetime-local" name="" id="taskStart" className='form-control' disabled/>
          </div>
          <div className='col-auto'>
            <label htmlFor="taskEnd" className='form-label'>Finaliza</label>
            <input type="datetime-local" name="" id="taskEnd" className='form-control'/>
          </div>
        </div>
      </div>
      <div className='mb-3 form-check'>
        <input type="checkbox" name="" id="completedCheck" className='form-check-input'/>
        <label htmlFor="completedCheck" className='form-check-label'>¿completada?</label>
      </div>
    </form>
  )
}

export default ListForm
