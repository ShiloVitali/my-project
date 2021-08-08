import React from "react";
import Header from "../header/Header";
import Main from "../main/main";

function App() {

  const country = [
    {name: 'Беларусь (BY)', value: 1},
    {name: 'Европа (EU)', value: 2},
    {name: 'СНГ (CIS)', value: 3}
  ];
 
  const region = [
      {name: 'Брестская область', value: 1},
      {name: 'Витебская область', value: 2},
      {name: 'Гродненская область', value: 3},
      {name: 'Гомельская область', value: 4},
      {name: 'Минская область', value: 5},
      {name: 'Могилевская область', value: 6},
    ]
  

  return (
    <div className='container'>
      <Header />
      <Main country={country} region={region} />
    </div>
  );
}

export default App;
