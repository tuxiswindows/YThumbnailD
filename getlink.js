const form = document.getElementById("form");
var Link;

form.addEventListener('submit', (event) => {
    Link = document.getElementById("link").value;
    window.open("http://img.youtube.com/vi/" + Link + "/maxresdefault.jpg", "_blank");
    event.preventDefault();
});