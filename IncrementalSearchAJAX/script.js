console.log("sanity check", $);

(function getCountries() {
    var input = $("#textbox");
    var resultsElem = $("#results");
    var val = input.val();
    input.on("input", function() {
        var val = input.val();
        // var time;
        // clearTimeout(time);
        // // request.abort();
        // ajaxStop(ajaxval);
        // time = setTimeout(ajaxval, 250);

        // function ajaxval() {
        //     var request =
        $.ajax({
            url: "https://flame-egg.glitch.me/",
            data: {
                q: val
            },
            success: function(data) {
                console.log(data);
                // request = null;
                var resultsHtml = "";
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        resultsHtml +=
                            '<div class = "results">' + data[i] + "</div>";
                    }
                } else if (data == 0) {
                    resultsHtml +=
                        '<div class = "results">' + "No Result" + "</div>";
                }
                resultsElem.html(resultsHtml).show();
            }
        });
        resultsElem.on("mouseover", function(e) {
            $(e.target).addClass("highlight");
            resultsElem.on("mouseout", function(e) {
                $(e.target).removeClass("highlight");
            });
        });
        resultsElem.on("mousedown", function(e) {
            $(e.target).on("click", function() {
                input.val($(e.target).text());
                resultsElem.hide();
            });
        });
    });
    input.on("keydown", function(e) {
        var arrows = e.keyCode;
        // console.log("keydown");
        if (arrows === 40) {
            if (resultsElem.children().hasClass("highlight")) {
                $(".highlight")
                    .next()
                    .addClass("highlight");
                $(".highlight")
                    .prev()
                    .removeClass("highlight");
            } else resultsElem.children(":first").addClass("highlight");
        } else if (arrows === 38) {
            if (resultsElem.children().hasClass("highlight")) {
                $(".highlight")
                    .prev()
                    .addClass("highlight");
                $(".highlight")
                    .next()
                    .removeClass("highlight");
            } else resultsElem.children(":last").addClass("highlight");
        } else if (arrows === 13) {
            input = input.val($(".highlight").text());
            resultsElem.hide();
        }
    });
})();
