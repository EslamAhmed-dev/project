import React, { useState } from "react";
import axios from "axios";

function Axios() {
  // const [users,setUsers] = useState([])
 
  const deleteUser = async () => {
    try {
      // إرسال طلب الحذف مباشرة برابط العنصر
      const res = await axios.delete("https://jsonplaceholder.typicode.com/users/1")

      // طباعة الاستجابة القادمة من السيرفر
      console.log("تم حذف بيانات المستخدم بنجاح", res.data)
    } catch (err) {
      console.log(err)
    }
  }

  
  // const upDate = async ()=>{
  //   try{
  //     const res = await axios.patch("https://jsonplaceholder.typicode.com/users/1",{
  //       name:"eslam"
  //     })
    
  //     setUsers(res.data)

  //   }catch(error){
  //     console.log(error)
  //   }

  // }
 
  return (
    <>
   <button onClick={deleteUser}>delete</button>
   {/* <h2>{users.name}</h2> */}
    </>
  )
}
export default Axios;
