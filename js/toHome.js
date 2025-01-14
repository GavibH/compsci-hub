const realURL = location.origin + "/compsci-hub";
const localURL = "file:///Users/g.hicks26/Desktop/CSClub/hub";

function toHome() {
    if (!realURL.includes("file")) {
        window.location.href = realURL + "/main.html?a=0";
    } else {
        window.location.href = localURL + "/main.html?a=0";
    }
    document.getElementById("open-animation").style.display = "none";
}