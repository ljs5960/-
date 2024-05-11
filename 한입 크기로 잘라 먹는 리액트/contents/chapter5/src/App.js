import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body>
        <div>child1 component1</div>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
