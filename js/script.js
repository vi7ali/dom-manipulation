const container = document.querySelector("#container");

const para = document.createElement("p");
para.setAttribute("style", "color: red;");
para.textContent = "Hey I'm red!";

container.appendChild(para);

const header = document.createElement("h3");
header.setAttribute("style", "color: blue;");
header.textContent = "I'm blue";

container.appendChild(header);

const secondContainer = document.createElement("div");
secondContainer.setAttribute("style", "background: pink; border: 1px solid black;")

const secondHeader = document.createElement("h1");
secondHeader.textContent = "I'm in a div";
const secondPara = document.createElement("p");
secondPara.textContent = "ME TOO!";

secondContainer.appendChild(secondHeader);
secondContainer.appendChild(secondPara);

container.appendChild(secondContainer);