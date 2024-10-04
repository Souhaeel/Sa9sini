import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function OneQuestion() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('http://localhost:3000/api/Questions/getAll')
            setData(res.data)
        }
        getData()
    }, [])
    console.log(data);

    return (
        <div>
        {data.map((element, i) => (
            <h1 key={i}>{element.category}</h1>
        ))}
    </div>
    )
}