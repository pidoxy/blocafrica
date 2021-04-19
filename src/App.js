import './App.css';
import TopNav from "./components/topNav";
import BottomNav from "./components/bottomNav";
import Home from "./pages/home";



function App() {
  return (
    <div className="App">
    <TopNav />
    <BottomNav />
    <Home />
      
    </div>
  );
}

export default App;
