const count = {
    "landscapes": 13,
    "portraits": 6,
    "wildlife": 10
};

function fetchPics(folder) {
    window.onload = function () {
        const base = "/alexeicoreiba.github.io/assets/images/";
        const dest = base + folder;
        let pics = "";
        for (let i = count[folder]; i > 0; i--) {
            pics += `<div class='grid-item'><img src='${dest}/img${i}.JPG'></div>`;
        }
        document.getElementById("grid").innerHTML = pics;
    };
}