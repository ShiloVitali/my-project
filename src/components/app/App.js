import React from "react";
import Header from "../header/Header";
import Main from "../main/main";

function App() {

  const country = [
    {name: 'Беларусь (BY)', value: 1},
    {name: 'Австрия (AT)', value: 2},
    {name: 'Азербайджан (AZ)', value: 3},
    {name: 'Россия (RU)', value: 4},
    {name: 'Украина (UA)', value: 5}
  ];
 

  

  return (
    <div className='container'>
      <Header />
      <Main country={country} />
    </div>
  );
}

export default App;
