import React, { useState } from 'react'
const ListForm = () => {

  // Fechas por defecto
  // ahora
  let now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset()) // la diferencia de tiempo hace posible el formato

  // 24 horas después de ahora
  let future = new Date(now.getTime() + 60 * 60 * 24 * 1000)

  const defaultTask = {
    titulo : "Nueva Tarea",
    descripcion : "",
    fecha_inicio : now.toISOString().slice(0,16),
    fecha_fin : future.toISOString().slice(0,16),
    finalizado : false
  }

  const [myTask, setMyTask] = useState(defaultTask)

  const handleInputChange = (event) => {
    const {name, value} = event.target
    if (event.target.id === "isCompleted")
      setMyTask({...myTask,[name]:value === "on" ? true : false})
    else
      setMyTask({...myTask,[name]:value})
  }

  const handleNewTask = (event) => {
    event.preventDefault()
    console.log(myTask)
    setMyTask(defaultTask)
  }

  return (
    <form action="" className='py-4' onSubmit={handleNewTask}>
      <div className='mb-3'>
        <label htmlFor="title" className='form-label'>Título</label>
        <input id='title' type="text" name='titulo' className='form-control' onChange={handleInputChange} value={myTask.titulo}/>
      </div>
      <div className='mb-3'>
        <label htmlFor="description">Descripción</label>
        <textarea name="descripcion" id="description" className='form-control' onChange={handleInputChange} value={myTask.descripcion}></textarea>
      </div>
      <div className='mb-3'>
        <div className='row g-3'>
          <div className='col-auto'>
            <label htmlFor="taskStart" className='form-label'>Inicia</label>
            <input type="datetime-local" name="fecha_inicio" id="taskStart" className='form-control' onChange={handleInputChange} value={myTask.fecha_inicio}/>
          </div>
          <div className='col-auto'>
            <label htmlFor="taskEnd" className='form-label'>Finaliza</label>
            <input type="datetime-local" name="fecha_fin" id="taskEnd" className='form-control' onChange={handleInputChange} value={myTask.fecha_fin}/>
          </div>
        </div>
      </div>
      <div className='mb-3 form-check'>
        <input type="checkbox" name="finalizado" id="isCompleted" className='form-check-input' onChange={handleInputChange} checked={myTask.finalizado}/>
        <label htmlFor="isCompleted" className='form-check-label'>¿completada?</label>
      </div>
      <div className='mb-3'>
        <button type="submit" className='btn btn-primary'>Agregar</button>
      </div>
    </form>
  )
}

export default ListForm
