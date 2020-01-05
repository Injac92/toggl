import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";

/*
  TYPESCRIPT REACT GUIDLINES

  Osim sto generalno typescript ima dosta kul feature-a, za to ti preporucujem neki tutorijal ili neki kurs
  koji ja imam. Ali ono sto je bitno u React-u sa TypeScript-om je sledece:
  1. kod definisanja komponenti (nebitno da li su klase ili funkcionalne) ako im stavljas props, bacice gresku 
  kako su props implicitno any type. To lako moze da sredis sa:
  function App(props:any)
  Ali ono sto je jos bolje, mozes da definises kako ce ti izgedati props-i
  Iznad definisanja komponente napises ovo
  interface [ime koje ti zelis, npr Props ili PropTypes] {
    nazivPropsa: boolean;
    nazivPropsa2: number,
    nekaFunckija: () => void -- void znaci da ne vraca nista (nema return), ako ima onda bi bilo npr () => boolean 
  }
  Konkretan primer toga ti je ovaj
  interface PropTypes {
    isOpen: boolean,
    numberOfUsers: number,
    toogleHamburgerButton: () => void
  }

  2. Sledeca bitna stvar, kod klasa je sledeca. Nece bacati gresku ali je kul da koristimo 
        interface State {
        isOpen: boolean;
      }

      export default class Navigation extends Component<{}, State> {

      Ovo sto ide posle Component, ova < i >, prva vrednost (u ovom primeru je to {}) su propsi, druga je state.
      Na taj nacin mozes da definises tipove propsa i state-a, zato bi bila odlicna praksa da stalno pravimo te interfejse
      na pocetku fajla, ako imamo propse i state, ako nemamo nista onda.

  3. Svi fajlovi su sada .tsx ukjlucujuci i testove. 
  
  4. Nemoj da se nerviras, ovo je jako korisna stvar za znati, postacemo bolji programeri. TypeScript je nesto 
     sto je najvise u trendu u frontend svetu. Ako imas neki problem, guglaj, pa ako bas ne moze nista onda mu 
     stavi :any to ce uvek proci. 
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
