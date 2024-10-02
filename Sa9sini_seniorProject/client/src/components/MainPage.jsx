import React, { useState, useEffect } from 'react';
import axios from 'axios'
    
export default function MainPage() {
    const [data, setData] = useState([])
    const [theme,setTheme] = useState("light")
    const [filteredData,setFilteredData]=useState([])
    const [search, setSearch]=useState("")

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('http://localhost:3000/api/Questions/getAll')
            setData(res.data)
        }
        getData()
    }, [])
    useEffect(()=>{
        const filterData = ()=>{
            let result = data
            if(search){
                result = result.filter((item)=>{
                    return item.question.toLowerCase().includes(search.toLowerCase())
                })
            }
            setFilteredData(result)
        }
        filterData()
    },search,data)
    console.log(data);

    return (
        <>
        <NavBar theme={theme} setTheme={setTheme} search={search} setSearch={setSearch}/>
        <div>
        {(search? filteredData : data).map((element, i) => (
            <h1 key={i}>{element.Question}</h1>
        ))}
    </div>
    </>
    )

}