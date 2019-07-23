(function() {
    var kitties = document.getElementsByClassName('kitty');
    var dot = document.getElementsByClassName('dot');
    var cur = 0;

    kitties[cur].classList.add("onscreen");
    dot[cur].style.backgroundColor = "white";

    document.addEventListener('transitionend', function fn(e) {
        if (e.target.classList.contains('exit')) {
            e.target.classList.remove('onscreen');
            e.target.classList.remove("exit");
        }
        //timer = setTimeout(moveKitties, 2000);
    });

    function moveKitties(next) {
        console.log('the current one is ' + cur);
        kitties[cur].classList.add("exit");
        dot[cur].style.backgroundColor = "transparent";
        cur = next;
        kitties[cur].classList.add("onscreen");
        dot[cur].style.backgroundColor = "white";

        if (typeof next != "undefined") {
            cur = next;
        } else {
            cur++;
            if (cur >= kitties.length) {
                cur = 0;
            }
        }

        kitties[cur].classList.add("onscreen");
    }
    for (var i = 0; i < dot.length; i++) {
        addDotClickHandler(i);
    }

    function addDotClickHandler(i) {
        dot[i].addEventListener("click", function() {
            console.log(i);
            if (dot[i].classList.contains("active")) {
                return;
            }

            clearTimeout(timer);
            moveKitties(i);
        });
    }

    var timer = setTimeout(moveKitties, 2000);
})();
