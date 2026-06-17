import{useState}from"react";
import{FcLike}from "react-icons/fc";
const reactionArray=["😥","😞","😔","😟","😊","😀","😃","😄","😁","😆","😂","🥰"];
function Arraytask()
{
        const[count,setCount]=useState(0);
        const handleClick=()=>{
            if(count<reactionArray.length-1){
                setCount(count+1)
            }
            else{
                setCount(count+1)
            }
        
        };
    
  return (
   <div className="container">
    if({count}>11)
    {
    <h2>Likes:{count}{reactionArray[count]}</h2>
}
else
{
    <h2>Likes:{count}{reactionArray[12]}</h2>
}
    <FcLike size={40} onClick={handleClick} style={{cursor:"pointer"}}/>
    </div>
  );
}

export default Arraytask