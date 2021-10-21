function fetchPics(folder) {
    return $.ajax({
        url: folder,
        dataType: "html",
        success: function (data) {
            // console.log("data: " + data);
            $(data).find("a").attr("href", function (i, val) {
                console.log("val: " + val);
                if (val.match(/\.(JPG)$/)) {
                    $(".grid").append("<div class='grid-item'><img src='" + val + "'></div>");
                }
            });
        }
    });
}