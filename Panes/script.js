(function() {
    var boxX, boxWidth, offset;
    var slide = $('#slide');
    var box = $('#box');
    var pane1 = $('#pane1');

    slide.on('mousedown', function(e) {
        boxX = box.offset().left;
        boxWidth = box.outerWidth();
        var slideX = slide.position().left;
        var pointerX = e.clientX - boxX;
        offset = pointerX - slideX;
        box.on('mousemove', drag);
        e.preventDefault();
    });

    $(document).on('mouseup', function() {
        box.off('mousemove');
    });

    function drag(e) {
        if (e.clientX > boxX + boxWidth) {
            return;
        }
        if (e.clientX < boxX) {
            return;
        }
        var px = e.clientX - boxX - offset + 'px';
        slide.css({
            left: px
        });
        pane1.css({
            width: px
        });
    }

})();



//alert("Hello");
//
//
// $(".bar").on("mousedown", function() {
//     $(".container").on("mousemove", function(e){
//         //console.log(e);
//         $(".top-image").css({"width": e.offsetX+"px"});
//         if (topimg.clientX !== x) {
//         bar.css({
//             left: x + "px"
//         });
//         topimg.css({
//             width: x + "px"
//         });
//     }
// });
//
// /////////mousedown mousemove
