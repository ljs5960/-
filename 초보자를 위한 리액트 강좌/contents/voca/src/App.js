import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  const name = 'Test';
  const user = {
    name: 'Lim'
  }

  return (
    <div className='App'>
      <Hello />
      <Welcome />
    </div>
  )
}

export default App;
