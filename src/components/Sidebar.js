import React, { useEffect } from "react";
import sidebarItems from "../data/sidebarItems.json"; // Import JSON data for sidebar items
import "tailwindcss/tailwind.css";

const Sidebar = () => {
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";

    sidebarItems.forEach((item) => {
      const div = document.createElement("div");
      div.setAttribute("role", "button");
      div.className =
        "sidebar-item flex items-center w-full p-3 leading-tight transition-all outline-none text-start text-white hover:bg-hoverbg";
      div.addEventListener("click", () => selectSidebarItem(item)); // Use addEventListener instead of setting onclick attribute

      const innerDiv = document.createElement("div");
      innerDiv.className = "grid mr-4 pl-4 place-items-left text-customsize";
      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = "";
      innerDiv.appendChild(img);

      const textNode = document.createTextNode(item.text);

      div.appendChild(innerDiv);
      div.appendChild(textNode);
      sidebar.appendChild(div);
    });
  }, []);

  const selectSidebarItem = (item) => {
    // Implement your selection logic here
    console.log("Selected item:", item);
  };

  return (
    <div className="relative flex h-full w-full max-w-[20rem] flex-col bg-customblue py-4">
      <div className="flex items-center gap-4 p-4 mb-2">
        <img
          src="../../Logo_white.svg"
          alt="brand"
          className="w-[185px] h-[72px] pl-4"
        />
      </div>
      <nav
        id="sidebar"
        className="flex min-w-[240px] flex-col gap-1 py-2 font-display text-base font-normal"
      ></nav>
    </div>
  );
};

export default Sidebar;
