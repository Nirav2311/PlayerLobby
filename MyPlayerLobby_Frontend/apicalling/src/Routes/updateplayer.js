import React, { useEffect }from 'react'

function Updateplayer() {

    

    useEffect(() => {
        fetch('http://localhost:3000/player/update/5ea87341758a712bc020a182',
        {
            method: "put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "name" : "BHUMI",
               "rank" :1,
               "score" : 1230000,
               "time" : "2 days",
               "fvrtGame" : "badminton",
               "gamePlayed" : "All",
               "status" : " somethimes available"
            })

        }
        )
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log("data to setstate=>", res)
            //setUpdateplayer(res)
        })
        .catch((error)=>{
            console.error(error);
        })
        
    },[])

    return (
        <div>
           <h1><i> update!!!!! </i></h1>
        </div>
    )
}

export default Updateplayer
