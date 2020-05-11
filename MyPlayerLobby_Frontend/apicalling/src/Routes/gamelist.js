import React from 'react';
import { useState , useEffect } from 'react';

function Gamelist() {
    const [list , setList]  = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/game/list')
        .then((res)=>{
           return res.json()
        })
        .then((res)=>{
            console.log(res);
           setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
        {list.map((obj)=>{
              return(
                  <ol key ={obj._id} type = "1">
                      <li>
                      {obj.title}
                      {obj.release}
                      </li>
                  </ol>
              )
        })}  
      </div>
    )
}

export default Gamelist
