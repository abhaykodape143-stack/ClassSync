import React from "react";
import "./App.css";
import User from "./component/user";

const App = () => {
  const arr=[10,20,30,40]

  return (
    <div>
      <div className="parent">
        {arr.map(function(first){
          return <User name={first}/>
        }
        )}
    
      </div>
    </div>
  );
};

export default App;