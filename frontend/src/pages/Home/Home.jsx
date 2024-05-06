import React,{useState} from 'react';
import "./Home";
import Header from '../../components/navbar/header/Header';
import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDowload from '../../components/AppDowload/AppDowload';

 const Home = () => {

  const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDowload/>
    </div>
  )
}


export default Home;