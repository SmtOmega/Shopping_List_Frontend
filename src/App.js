import AppNavbar from "./components/AppNavbar";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Modal from './components/Modal'

function App() {
  return <>
    <Modal/>
    <AppNavbar />
    <ShoppingList />
  </>;
}

export default App;
