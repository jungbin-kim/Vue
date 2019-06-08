export const writeTo = (elementId, message) => {
  console.log(message);
  const li = document.createElement("li");
  li.insertAdjacentHTML("beforeend", message);
  const wrapper = document.getElementById(elementId);
  wrapper.getElementsByTagName("ul")[0].appendChild(li);
  // container.appendChild(li);
};

export const init = (elementId, name) => {
  const existElement = document.getElementById(elementId);
  if (existElement) {
    existElement.remove();
    // Internet Explorer에선 지원하지 않음. (Polyfill: https://developer.mozilla.org/ko/docs/Web/API/ChildNode/remove#%ED%8F%B4%EB%A6%AC%ED%95%84)
  }
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", elementId);
  const title = document.createElement("h1");
  title.innerHTML = name;
  wrapper.appendChild(title);
  const logsContainer = document.createElement("ul");
  wrapper.appendChild(logsContainer);
  document.body.appendChild(wrapper);
};
