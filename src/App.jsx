import {Header,About} from "./views";
import './App.css'
import { useAppContext } from "./context/AppContext";

function App() {
  const {theme} = useAppContext();

  return (
    <div data-theme={theme} className="app">
      <div className="app-content">
        <div className="app-column flex-1">
          <Header/>
        </div>
        <div className="app-column flex-2 overflow-column">
          <About/>
        </div>
      </div>
    </div>
  )
}

export default App
