import React from "react";
import { useState, useEffect } from "react";

function Playerlist() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/player/list")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setList(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      {list.map((obj) => {
        return (
          <div>
            <ol key={obj._id} type="1">
              <li>{obj.name}</li>
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default Playerlist;
