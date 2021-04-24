import React, {useState} from "react";
import logo from "./queeery-logo.png";
import movies from './movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from './components/MovieList';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> <br />
//           have fun and be creative!
//         </p> */}
//         <h1>Movies</h1>
//       </header>
//     </div>
//   );
// }
const App = () => {
  const [move, setMove] = useState(movies);
  return (
    
    <div className = 'row'>
      <MovieList move={movies} />

    </div>
  )
}

export default App;
