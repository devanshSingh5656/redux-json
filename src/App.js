import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResturantData from "./restaurants.json";
import cuisines from "./cuisines.json";
import MainModule from "./MainModule";
import "bootstrap/dist/css/bootstrap.min.css";
import {DropdownButton,Dropdown} from 'react-bootstrap'
function App() {
  const [SearchData, setSearchData] = useState("");
  const [Input, setInput] = useState([""]);

  const dispatch = useDispatch();
  const Category = useSelector((state) => state.Category);

  useEffect(() => {
    dispatch({ type: "FETCH_REST", item: ResturantData[0].data });
    dispatch({ type: "FETCH_CATE", item: cuisines[0].data });
  }, []);

  const handleChange = (e) => {
    const temp = [...e.target.selectedOptions];

    setInput(temp.map((res) => res.value));
  };
 
let data=Category.map((items)=>{
  return items.name
})
  return (
    <div className="container">
      <input
        id="searchTxt"
        placeholder={SearchData}
        onKeyPress={(e) =>
          e.key === "Enter" && setSearchData(e.target.value.toLowerCase())
        }
        type="text"
      />
      <br />
      <select multiple={true} onChange={(e) => handleChange(e)}>
        {/* <option value="Chinese">Chinese</option>
        <option value="Indian">Indian</option>
        <option value="Thai">Thai</option>
        <option value="Greek">Greek</option>
        <option value="Vietnamese">Vietnamese</option>
        <option value="French">French</option> */}
        {data.map(item=>(
          console.log(item),
           <option type='checkbox' value={item}>{item}</option>

           ))}
        
      </select>
     
      <button onClick={() => dispatch({ type: "CLEAR" })}>Reset</button>

      <MainModule SearchData={SearchData} Input={Input} />
    </div>
  );
}

export default App;
