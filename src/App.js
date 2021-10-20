import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';
import Registration from './component/Registration/Registration';
import SingleService from './component/SingleService/SingleService'
import AuthProvider from './component/contexts/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
            </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/about'>
          <About></About>
          </PrivateRoute>
          <Route path="/services">
          <Services></Services>
          </Route>
          <PrivateRoute path='/contact'>
          <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path='/singleservice/:serviceId'>
          <SingleService></SingleService>
          </PrivateRoute>
          <Route path='/registration'>
          <Registration></Registration>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
