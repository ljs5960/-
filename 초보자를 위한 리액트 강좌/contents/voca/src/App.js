import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/'>
            <DayList />
          </Route>
          <Route path='/day'>
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}