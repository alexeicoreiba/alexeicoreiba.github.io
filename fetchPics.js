const count = {
    "landscapes": 18,
    "portraits": 6,
    "wildlife": 10
};

function fetchPics(folder) {
    window.onload = function () {
        const base = "assets/images/";
        const dest = base + folder;
        let pics = "";
        for (let i = count[folder]; i > 0; i--) {
            pics += `<div class='grid-item'><img src='${dest}/img${i}.JPG'></div>`;
        }
        document.getElementById("grid").innerHTML = pics;
        document.getElementsByTagName("body").innerHTML += `<div class="copyright">
        <p>All content and photographs © 2021 Alexei Coreiba Photography
        </p>
    </div>`;
    };
}