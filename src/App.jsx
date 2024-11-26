import './App.css'
import { JsonFetch } from './components/JsonFetch'

function App() {

  return (
    <>
      <JsonFetch  route="data"/>
      <JsonFetch  route="error"/>
      <JsonFetch  route="loading"/>
    </>
  )
}

export default App
