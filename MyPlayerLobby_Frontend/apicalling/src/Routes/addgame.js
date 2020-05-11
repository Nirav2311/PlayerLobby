import React , {useState} from 'react'

function Addgame() {
    const [game, setgame] = useState({'title':'',"platform":'',"genre":'',"rating":'',"publisher":'',"release":'',"status":''})

    // useEffect(() => {
    //     fetch('http://localhost:3000/game/add',
    //     {
    //         method:'post',
    //         headers :{
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 "title": "Football",
    //                 "platform" : "p2",
    //                 "genre" : "g2",
    //                 "rating": 0,
    //                 "publisher" : "p1",
    //                 "release" : "2018",
    //                 "status" :"active"
    //             }
    //         )

    //     }
    //     )
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
        
    // }, [])

    const addgame = () => {
        console.log(game);

        fetch('http://localhost:3000/game/add',
        {
            method:'post',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                    "title": game.title,
                    "platform" : game.platform,
                    "genre" : game.genre,
                    "rating": game.rating,
                    "publisher" : game.publisher,
                    "release" : game.release,
                    "status" :game.status
                })
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
    }
    
    const onchange = (event) =>{
        game[event.target.name] = event.target.value
        
       // game.platform = event.target.value
        setgame({...game})
        console.log(game)  
    }

    return (
        <div>
            
            <label>Title</label><br/>
            <input type ="text" name="title" value = {game.title} onChange = {onchange} /><br/>
            <label>Plateform</label><br/>
            <input type ="text" name ="platform" value = {game.platform} onChange = {onchange}/><br/>
            <label>Genre</label><br/>
            <input type ="text" name="genre" value = {game.genre} onChange = {onchange}/><br/>
            <label>Rating</label><br/>
            <input type ="number" name="rating" value = {game.rating} onChange = {onchange}/><br/>
            <label>Publisher</label><br/>
            <input type ="text" name="publisher" value = {game.publisher} onChange = {onchange}/><br/>
            <label>Release</label><br/>
            <input type ="text" name="release" value = {game.release} onChange = {onchange}/><br/>
            <label>Status</label><br/>
            <input type ="text" name="status"value = {game.status} onChange = {onchange}/><br/>
            <button onClick={addgame}>Submit</button>
            {game.rating}
            
        </div>
    )
}

export default Addgame
