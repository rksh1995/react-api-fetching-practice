import { useEffect, useState } from "react";

import Card from "./Components/Card";
import Shimmer from "./Components/Shimmer";

function App() {
  const [imagelist, setImageList] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://picsum.photos/v2/list");
    const json = await data.json();
    setImageList(json);
  };

  return imagelist.length===0?(<Shimmer/>):(
    <>
     <div className="search">
      <input type="text" className="search-name" value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);

      }}/>
      <button onClick={()=>{
        // FILTER THE CARDS AND UPDATE THE UI
        
        const filteredCard=imagelist.filter((res)=> res.json.author.toLowerCase().includes(searchText.toLowerCase()));
        setImageList(filteredCard)
      }}>Search</button>
     </div>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          paddingTop: "50px",
        }}
      >
       
        {imagelist.map((currentValue) => {
          return <Card key={currentValue.id} {...currentValue} />;
        })}
      </div>
    </>
  );
}

export default App;
