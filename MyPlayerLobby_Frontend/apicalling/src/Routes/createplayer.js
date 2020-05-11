import React,{ useState} from 'react'

function Createplayer() {
    const [name , setName] = useState("");
    const [rank, setRank] = useState("");
    const [score, setScore] = useState("");
    const [time, setTime] = useState("");
    const [favgame, setFavgame] = useState("");
    const [gameplayed, setGameplayed] = useState("");
    const [status, setStatus] = useState(true);


    // useEffect(() => {
    //     debugger
    //     fetch('http://localhost:3000/player/add',{
    //         method:'post',
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body :JSON.stringify({
    //             "name" : "Sachin",
    //            "rank" :1,
    //            "score" : 100000,
    //            "time" : "2 days",
    //            "fvrtGame" : "cricket",
    //            "gamePlayed" : "cricket",
    //            "status" : "not-available"
    //              })
    //     })
    //     .then((res)=>{
    //        return res.json()
    //     })
    //     .then((res)=>{
    //         console.log(res)
        
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    const add = () =>{

        const p = JSON.stringify({
              "name" : name,
               "rank" :rank,
               "score" : score,
               "time" : time,
               "fvrtGame" : favgame,
               "gamePlayed" : gameplayed,
               "status" : status
        })

        fetch('http://localhost:3000/player/add',{
            method:'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : p,
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

        console.log(p);
    }


    const onChangeName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const onChangRank = (event) =>{
        setRank(event.target.value)
        console.log(event.target.value)
    }

    const onChangScore = (event) =>{
        setScore(event.target.value)
        console.log(event.target.value)
    }
    
    const onChangTime = (event) =>{
        setTime(event.target.value)
        console.log(event.target.value)
    }

    const onChangfavgame = (event) =>{
        setFavgame(event.target.value)
        console.log(event.target.value)
    }

    const onChanggameplayed = (event) =>{
        setGameplayed(event.target.value)
        console.log(event.target.value)
    }

    const onChangStatus = (event) =>{
        setStatus(!status)
        console.log(event.target.value)
    }

    
    return (
        <div>
            <label>Name: </label>
            <input type="text" onChange={onChangeName} value = {name}/>
            <br/>
            <label>Rank: </label>
            <input type="text" onChange={onChangRank} value = {rank}/>
            <br/>
            <label>Score: </label>
            <input type="text" onChange={onChangScore} value = {score}/>
            <br/>
            <label>Time: </label>
            <input type="text" onChange={onChangTime} value = {time}/>
            <br/>
            <label>FavGame: </label>
            <input type="text" onChange={onChangfavgame} value = {favgame}/>
            <br/>
            <label>GamePlayed: </label>
            <input type="text" onChange={onChanggameplayed} value = {gameplayed}/>
            <br/>
            <label>Status: </label>
            <input type="text" onChange={onChangStatus} value = {status}/>
            <br/>
            <button onClick={add}> Add</button>
        </div>
    )
}

export default Createplayer
