import logo from './logo.svg';
import './App.css';
import Dog from './components/Dog';
import data from './data/dogs.js'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand" href="#"><b>Food Remaining:</b> 25</div>
        </div>
      </nav>
      <div className='container py-5'>
        <div className='row'>
          { data.map((info) => <Dog info={info} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
