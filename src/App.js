
import './App.css';
import { Header } from './MyComponents/Header';
import { Properties } from './MyComponents/Properties';
import { Footer } from './MyComponents/Footer';
import { AddProperty } from './MyComponents/AddProperty';
import React, {useState} from 'react';

function App() {

  const onDelete = (property) => {
    // console.log("OnDelete", property);
    setProperties(properties.filter((e) =>{
      return e!==property;
    }))
  }

  const addProperty = (title, desc, area) => {
    console.log("Value:", title, desc, area);
    let sno;
    if(properties.length === 0){
      sno = 0;
    }
    else{
      sno = properties[properties.length-1].sno+1;
    }
    const myProperty = {
      sno: sno,
      title: title,
      desc: desc,
      area: area
    }
    setProperties([...properties, myProperty]);
  }

  const [properties, setProperties] = useState([
  // let properties = [
    {
      sno: 1,
      name: "Bilal Villa",
      desc: "Mansion",
      area: "5 acres"
    },
    {
      sno: 2,
      name: "Bilal Home",
      desc: "Mansion",
      area: "10 acres"
    },
    {
      sno: 3,
      name: "Bilal Building",
      desc: "Mansion",
      area: "50 acres"
    }
  ]);

  return (
    <>
    <Header title="Property Management System" searchBar={true} />
    <AddProperty addProperty={addProperty}/>
    <Properties property={properties} onDelete={onDelete}/>
    <Footer/>
    </>

  );
}

export default App;
