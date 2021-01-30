import Navbar from './components/Navbar'
import Home from './Pages/Home'
 import News from './Pages/News';
 import Create from './Pages/Create'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Edit from './Pages/Edit'
import { NewsContextProvider } from './components/Services/ContextService';
function App() {
  return (
    <div className="App">
 <NewsContextProvider>

    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}></Route>
          <Route path='/home' exact exact component={Home}></Route>
          {/* <Route path='/about' exact component={About}></Route> */}
          <Route path='/news' exact component={News}></Route>
          <Route path='/edit/:id' exact component={Edit}></Route>
          <Route path='/post' exact component={Create}></Route>
      </Switch>
    </Router>
    {/* <Create ></Create> */}
 </NewsContextProvider>
    </div>
  );
}

export default App;
