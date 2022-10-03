import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";



function BotsPage() {
  //start here with your code for step one
  const[bots,setBots]=useState([])
  const[botArmy,setBotArmy]=useState([])
  
  useEffect(()=>{
    const fetchAllBots=async()=>{
      const res =await fetch('http://localhost:8002/bots')
      const data =await res.json()
      setBots(data)
     console.log(data);
    
      }
    fetchAllBots()},[])


   
const HandleAddCard=(botItem)=>{
  console.log(botItem)
const exist =botArmy.find((item)=>item.id===botItem.id)
console.log(exist)
  if (exist){
    console.log(exist)
    setBotArmy(
      botArmy.map((item)=>item.id ===botItem.id
      ?{...exist}:item
    )
    )
  }
  
  else{
    setBotArmy([...botArmy,{...botItem}])
  }

}
const HandleRemoveBot=(botItem)=>{
  setBotArmy(botArmy.filter((item)=> item.id!==botItem.id))
  console.log("delete")
  
}

  return (
    <div>
      <YourBotArmy botArmy={botArmy} HandleAddCard={HandleAddCard} HandleRemoveBot={HandleRemoveBot}/>
      <BotCollection bots={bots} HandleAddCard={HandleAddCard}  HandleRemoveBot={HandleRemoveBot}/>
    </div>
  )
}

export default BotsPage;
