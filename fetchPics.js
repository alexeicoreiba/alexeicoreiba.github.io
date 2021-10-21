function fetchPics(folder) {
    return $.ajax({
        url: folder,
        dataType: "html",
        crossDomain: true,
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': "*"
        },
        success: function (data) {
            data = JSON.parse(data);
            console.log("data: " + data);
            var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
            data = data.sort(collator.compare).reverse();
            console.log("data2: " + data);
            $(data).find("a").attr("href", function (i, val) {
                console.log("val: " + val);
                if (val.match(/\.(JPG)$/)) {
                    $(".grid").append("<div class='grid-item'><img src='" + val + "'></div>");
                }
            });
        }
    });
}
