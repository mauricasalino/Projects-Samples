console.log("sanity check", $);

(function() {
    var currentplayer = 'player1';
    // var slot = $("slot");
    var image = $("#winnerimg");
    // var column = $(".columns");
    var slots = $('.slot');

    var diags = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38]
    ];

    diags = diags.map(function(arr) {
        var elems = slots.eq(arr.shift());
        while (arr.length) {
            elems = elems.add(slots.eq(arr.shift()));
        }
        return elems;
    });

    function checkForDiagonalVictory() {
        for (var i = 0; i < diags.length; i++) {
            if (checkForVictory(diags[i])) {
                //return true;
                //winner
                //console.log('hey here I am DIAG');
                alert('Winner in DIAG!');
                image.removeClass('homer');
                setTimeout(function() {
                    image.addClass('homer');
                }, 3000);
            }
        }
    }

    checkForDiagonalVictory();


    $('.columns').on('click', function(e) {
        var slotsInColumn = $(e.currentTarget).children();
        //var columnWasFull = true;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass('player1') &&
                !slotsInColumn.eq(i).hasClass('player2')
            ) {
                slotsInColumn.eq(i).addClass(currentplayer);
                //columnWasFull = false;
                break;
            }
        }

        checkForVictory(slotsInColumn);
        console.log(i);
        console.log($('.row' + i));
        checkForVictoryRows($('.row' + i));
        if (i == -1) { /// ---> it means the column is already full
            return;
        }


        switchPlayers();

        // function checkForDiagonalVictory(arr) {
        //     var count = 0;
        //     for (var i = 0; i < diag.length; i++) {
        //         count = 0;
        //         for (var j = 0; j < diag[i].length; j++) {
        //             if (slot.eq(diag[i][j]).hasClass(currentplayer)) {
        //                 count++;
        //                 console.log(count);
        //             }
        //             if (count == 4) {
        //                 //winner
        //                 console.log('hey here I am DIAG');
        //                 alert('Winner in DIAG!');
        //                 image.removeClass('homer');
        //                 setTimeout(function() {
        //                     image.addClass('homer');
        //                 }, 3000);
        //                 return true;
        //             }
        //         }
        //     }
        // }

        function checkForVictoryRows(rowsSlot) {
            var count = 0;
            for (var i = 0; i < rowsSlot.length; i++) {
                if (rowsSlot.eq(i).hasClass(currentplayer)) {
                    //str = 'win';
                    count++;
                    if (count == 4) {
                        //winner
                        console.log('hey here I am ROW');
                        alert('Winner in a ROW!');
                        image.removeClass('homer');
                        setTimeout(function() {
                            image.addClass('homer');
                        }, 3000);
                        //TO DO PUT BIG SPLASHY MESSAGE WINNER
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

    });

    function checkForVictory(slotsInColumn) {
        var count = 0;
        for (var i = 0; i < slotsInColumn.length; i++) {
            if (slotsInColumn.eq(i).hasClass(currentplayer)) {
                //str = 'win';
                count++;
                if (count == 4) {
                    //winner
                    console.log('hey here is a column winner');
                    image.removeClass('homer');
                    setTimeout(function() {
                        image.addClass('homer');
                    }, 3000);
                    alert('Winner Column!');
                    //TO DO PUT BIG SPLASHY MESSAGE WINNER
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    $('.button').on('click',
        //Clear Board
        function clearBoard() {
            location.reload();}
    );


    function switchPlayers() {
        if (currentplayer == 'player1') {
            currentplayer = 'player2';
        } else {
            currentplayer = 'player1';
        }
    }
})();
