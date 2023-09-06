import { useState } from "react";
export default function Scoreboard() {

  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  // function handlePlusClick() {
  // player.score++; // cant change on  the value of the object directly we must use setState (setPlayer)   
  // 
//}
  function handlePlusClick(event) {
   
    setPlayer((player) => ({
      ...player,
      score: player.score++,
    }));
  }



 //no change 
  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  // This function does not save the previous values of the object 

  // function handleLastNameChange(e) {
  //   setPlayer({
  //     lastName: e.target.value,
  //   });
  // }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }


  return (
    <div style={{marginLeft:650,marginTop:50}}>
      <label>
       
       &nbsp;&nbsp; Score: <b>{player.score}</b>{" "}
      <button onClick={handlePlusClick}>+1</button>


      </label>
      <br></br>
      <label>
        First name:
        <br></br>
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
     <br></br>
      <label>
        Last name:
        <br></br>
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </div>
  );
}

