import { useState } from "react";

export default function Home(){
  const [increment,setIncrement] = useState(0);
  const [color,setColor] = useState("red");
  const colorList = ["blue","red","green"];
  const [inc,setInc] = useState(0);
  const clicker = ()=>{
    setIncrement(increment+1);
    if(inc>=2)
      setInc(0);
    else 
      setInc(inc+1);
    setColor(colorList[inc]);

  }
  return(
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h1>{increment}</h1>
      <button style={{backgroundColor:color,height:70,width:100,color:"white"}} onClick={clicker}>Click</button>
    </div>
  );
}