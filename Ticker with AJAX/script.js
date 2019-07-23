(function() {
    var headlines = $("#headlines");
    var links = $('a');
    var left = headlines.offset().left;
    var animId;

    $.ajax({
        url: 'data.json',
        method: "GET",
        success: function(headlines) {
            var html = '';
            for (i = 0; i < headlines.length; i++) {
                html += '<a href=' + headlines[i].href + '>' + headlines[i].text + '</a>'
            }
            $("#headlines").append(html);
        }
    });



    function moveHeadlines() {
        left--;
        if (left <= -links[0].width()) {
            left += links[0].width();
            headlines.append(links[0]);
        }
        $("#headlines").css({
            left: left + "px"
        });

        animId = requestAnimationFrame(moveHeadlines);
    }

    $(document).on("click", function() {
        cancelAnimationFrame(animId);
    });

    $(document).on("mouseout", function() {
        moveHeadlines();
    });
    moveHeadlines();

})();
