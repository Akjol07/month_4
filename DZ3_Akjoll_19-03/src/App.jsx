import './App.css'
import Products from "./components/products.jsx";
import Nav from "./components/nav.jsx";

function App() {
  return (
      <>
          <Nav/>
          <div className="App">
              <Products/>
          </div>
      </>

  )
}

export default App
