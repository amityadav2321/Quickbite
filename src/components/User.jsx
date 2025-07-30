import { useEffect, useState } from "react";

const User = () => {
    const [userInfo,setUserInfo]=useState("");
 useEffect(()=>{
    getInfo();
 },[])

  async function getInfo (){
    const data = await fetch("https://api.github.com/users/amityadav2321");
    const json = await data.json();
    
    setUserInfo(json);

  }
  const { name,location,avatar_url,bio} =userInfo;
    return <div className="border p-10 m-10 w-100 border-gray-200 shadow-sm hover:shadow-md transition">
        <div className="mb-5">
            <img src={avatar_url}/>
        </div>
        <div>
            <h2 className="font-bold text-xl">Name: {name}</h2>
            <h3 className="font-bold">Location: {location}</h3>
            <h4 className="font-bold">Bio: {bio}</h4>
            <h4 className="font-bold">Contact: itsamityadav2307@gmail.com</h4>
        </div>
        
    </div>
}
export default User;