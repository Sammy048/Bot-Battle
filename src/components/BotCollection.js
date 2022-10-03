import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,HandleAddCard}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
     
     
     
          {bots.map((bot)=>  <BotCard bot={bot}  HandleAddCard={HandleAddCard}/>)}
        
 </div>
    </div>
  );
}

export default BotCollection;
