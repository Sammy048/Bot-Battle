import React from "react";
import BotCard from "./BotCard";
function YourBotArmy({HandleAddCard,botArmy,HandleRemoveBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          
          {botArmy.map((bot)=>  <BotCard bot={bot}  HandleAddCard={HandleAddCard} HandleRemoveBot={HandleRemoveBot} key={bot.id}/> )}
                
              
            
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
