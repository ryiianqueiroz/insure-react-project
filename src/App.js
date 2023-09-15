import './App.css';
import Nav from './components/nav.js'
import MainContainer from './components/main-container.js'
import Middle from './components/middle.js'
import Footer from './components/footer.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainContainer/>
      <Middle/>
      <Footer/>
    </div>
  );
}

export default App;