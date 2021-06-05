import React ,{ useState,createContext} from 'react'
import CompA from './ComponentA'
import './App.css';

const firstname=createContext();
const lastname=createContext();
function App() {

  const [name,set]= useState("");
  const [full,met]= useState("");
const test =(event)=>{
  event.preventDefault();
  set(event.target.value);
}
  const  fun=( )=>
  {
met(name);
  }
  return (

   <div className="App">
      <h1>
Hello {full}
      </h1>
      <input
      type="text"
      placeholder="Enter your name"
      onChange={test}



      >
      </input>
<button className="butt" onClick={fun}>  Click </button>
    </div>
   /* <firstname.Provider value={"mukesh"}>
      <lastname.Provider value={"sharma"}>
      <CompA/>
      </lastname.Provider>
    </firstname.Provider>
*/
  );
}

export default App;
export {firstname,lastname};
