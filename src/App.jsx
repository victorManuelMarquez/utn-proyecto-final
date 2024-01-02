import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListForm from './components/ListForm/ListForm'
import List from './components/List/List'

function App() {

  return (
    <>
      <main className='container'>
        <ListForm></ListForm>
        <div className='container-fluid'>
          <List></List>
        </div>
      </main>
    </>
  )
}

export default App
