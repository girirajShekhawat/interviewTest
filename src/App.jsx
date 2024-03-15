 import { useEffect,useState } from 'react'
import Header from './componenets/Header.jsx' ;
import Main from './componenets/Main.jsx';
import './App.css'

function App() {
 const [data , setdata]=useState({});
 const [searchData, setSearchData]=useState("")
  


  function  handleSearch(searchdata){
    setSearchData(searchdata);
    let url=`https://api.weatherapi.com/v1/current.json?key=7482b17a320e476a811142725241503&q=${searchData}&aqi=yes`
        async  function  searchForWeather  (){
            const data= await fetch(url);
            const res=await data.json()
                
            if(res){
                setdata({...res})
            }
        } 
         
        searchForWeather()
    
     
  }
  console.log(data)

  return (
    <>
       <div>
        <Header handleSearch={handleSearch}/>
        <Main/>
       </div>
    
    </>
  )
}

export default App
