// import {useState} from 'react';
// const DoTo = () =>{
//     const [tasks, setTasks] = useState(["task1","task2","task3"]);
// return (
//     <div>
//         <h3>do to list</h3>
//         <ul>
//             {tasks.map((task, index) => {
//                 return (
//                 <li>{task}</li>
//                 )
//             })}

//         </ul>
//     </div>
// )
// }
// export default DoTo;

import { useState } from "react";

const ToDo = () => {
  // 1. حالة النص المدخل في الـ Input
  const [inputValue, setInputValue] = useState("");

  // 2. قائمة المهام المبدئية
  const [tasks, setTasks] = useState([
    "learn react",
    "go to gym",
    "like this video"
  ]);

  // 3. دالة إضافة task جديدة
  const handleClick = () => {
    setTasks([...tasks, inputValue]);
    setInputValue(""); // إعادة تفريغ الـ Input
  };

  // 4. دالة حذف task بناءً على الـ Index
  const handleRemoveItem = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>to do list</h3>

      {/* عرض قائمة المهام */}
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}{" "}
              <button onClick={() => handleRemoveItem(index)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>

      {/* إدخال مهام جديدة */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>add task</button>
    </div>
  );
};

export default ToDo;