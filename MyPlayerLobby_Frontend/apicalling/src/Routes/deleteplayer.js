import React ,{useState} from 'react'

function Deleteplayer() {

    const [id, setId] = useState()

    const deleteevent = () => {
        fetch(`http://localhost:3000/player/delete/${id}`,{
            method:"delete",
            headers:{
                "Content-Type":"application/json"
            },
            
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res)    
        })
        .catch((err)=>{
            console.error(err);
            
        })      
    }

    const change = (event) =>{
        setId(event.target.value)
    }
    
    return (
        <div>
            Delete :<input type="text" placeholder="Enter the id" onChange={change}/><br/>
            <button onClick={deleteevent}  style={{backgroundColor : "red"}}>delete</button>
        </div>
    )
}

export default Deleteplayer
