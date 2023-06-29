import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [imagelist, setImageList] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async()=>{
    const data = await fetch("https://picsum.photos/v2/list");
    const json = await data.json();
    setImageList(json)
  }

  return (
    <>
       <div className='container' style={{display:"flex", gap:"25px" ,flexWrap:"wrap" ,paddingTop:"50px" }}>
       {imagelist.map((currentValue)=>{
          return  <Card key={currentValue.id} {...currentValue}/>
        })}
       </div>
      
       
    </>
  )
}

export default App
