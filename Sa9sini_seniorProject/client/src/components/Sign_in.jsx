import React, { useState , useEffect} from 'react';
import axios from 'axios'

export default function Sign_in(){
    const [data,setData] = useState([])

useEffect(()=>{
    const getData = async ()=>{
   
            const response = await axios.get('http://localhost:3000/api/users/getAll');
            setData(response.data); 
        } 
    getData()

},[])


    return(
        <div>
        {data.map((element, i) => (
            <h1 key={i}>{element.email}</h1> // Add a key to each mapped element
        ))}
    </div>
);
}