import React, { useEffect } from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState([]);

  useEffect(() => {
    fetchplayerlist();
  }, []);

  const fetchplayerlist = () => {
    fetch("http://localhost:3000/player/list")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteevent = (_id) => {
    fetch(`http://localhost:3000/player/delete/${_id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        fetchplayerlist();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addplayer = (newData) => {
    const p = JSON.stringify({
      name: newData.name,
      rank: newData.rank,
      score: newData.score,
      time: newData.time,
      fvrtGame: newData.fvrtgame,
      gamePlayed: newData.gameplayed,
      status: newData.status,
    });

    fetch("http://localhost:3000/player/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: p,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        fetchplayerlist();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(p);
  };

  const updateplayer = (newData, oldData) => {
    fetch(`http://localhost:3000/player/update/${newData._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newData.name,
        rank: newData.rank,
        score: newData.score,
        time: newData.time,
        fvrtGame: newData.fvrtgame,
        gamePlayed: newData.gameplayed,
        status: newData.status,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("data update=>", res);
        fetchplayerlist();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MaterialTable
      title="Jay Swaminarayan"
      columns={[
        { title: "Name", field: "name" },
        { title: "Rank", field: "rank" },
        { title: "Score", field: "score" },
        { title: "Time", field: "time", type: "numeric" },
        { title: "Favourite Game", field: "fvrtgame" },
        { title: "Game Played", field: "gameplayed" },
        { title: "Status", field: "status" },
      ]}
      data={state.map((obj) => {
        return {
          name: obj.name,
          rank: obj.rank,
          score: obj.score,
          time: obj.time,
          fvrtgame: obj.fvrtGame,
          gameplayed: obj.gamePlayed,
          status: obj.status,
          _id: obj._id,
        };
      })}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              addplayer(newData);
              // setState((prevState) => {
              //   const data = [...prevState.data];
              //   data.push(newData);
              //   return { ...prevState, data };
              // });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();

              console.log(newData);
              console.log(oldData);
              updateplayer(newData, oldData);

              // if (oldData) {
              //   setState((prevState) => {
              //     const data = [...prevState.data];
              //     data[data.indexOf(oldData)] = newData;
              //     return { ...prevState, data };
              //   });
              // }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              deleteevent(oldData._id);
            }, 600);
          }),
      }}
    />
  );
}
