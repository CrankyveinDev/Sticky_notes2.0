import React, { useState } from "react";

import plusIcon from "../../assets/plus.png";

import "./Sidebar.css";

const dropnote=()=>{}
const dragover=event=>{
  event.stopPropagation();
  event.preventDefault();
}

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar" onDragOver={dragover}>
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
          draggable="true"
            onDragEnd={dropnote}
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
