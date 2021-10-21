function fetchPics(folder) {
    return $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                console.log("val: " + val);
                if (val.match(/\.(JPG)$/)) {
                    $(".grid").append("<div class='grid-item'><img src='" + val + "'></div>");
                }
            });
        }
    });
}