import { useState } from "react";

export default function Message({message}){
  return(
    <div className="Message">
      {message}
    </div>
  )
}