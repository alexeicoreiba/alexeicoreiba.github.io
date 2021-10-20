function fetchPics(folder) {
    return $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(JPG)$/)) {
                    console.log('heh');
                    $(".grid").append("<div class='grid-item'><img src='" + val + "'></div>");
                }
            });
        }
    });
}