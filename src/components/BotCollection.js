import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,HandleAddCard,HandleRemoveBot}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
     
     
     
          {bots.map((bot)=>  <BotCard bot={bot}  HandleAddCard={HandleAddCard} HandleRemoveBot={HandleRemoveBot} key={bot.id}/>) }
        
 </div>
    </div>
  );
}

export default BotCollection;
