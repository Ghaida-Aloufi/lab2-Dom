let x = document.getElementById("seq")

setInterval(() => {
  x.style.left = Math.floor(Math.random() * 800) + "px";
  x.style.right = Math.floor(Math.random() * 800) + "px";
  x.style.bottom = Math.floor(Math.random() * 800) + "px";
  x.style.top = Math.floor(Math.random() * 800) + "px";

  x.style.backgroundColor = '#' + Math.floor(Math.random() * 74803873).toString(16);
  x.style.height = Math.floor(Math.random() * 800) + "px";
  x.style.width = Math.floor(Math.random() * 800) + "px";




}, 500);
