const count = {
    "landscapes": 19,
    "portraits": 30,
    "wildlife": 9
};

function fetchPics(folder) {
    window.onload = function () {
        const base = "assets/images/";
        const dest = base + folder;
        let pics = "";
        for (let i = count[folder]; i > 0; i--) {
            pics += `<div class='grid-item'><img class="images" src='${dest}/img${i}.JPG'></div>`;
        }
        document.getElementById("grid").innerHTML = pics;
        document.getElementsByTagName("body").innerHTML += `<div class="copyright">
        <p>All content and photographs © 2021 Alexei Coreiba Photography
        </p>
    </div>`;
        var grid = document.querySelector('.grid');
        var images = document.querySelectorAll('.images');
        imagesLoaded(grid, function () {
            var msnry = new Masonry(grid, {
                itemSelector: '.grid-item',
                percentPosition: true
            });
        });
    };
}
