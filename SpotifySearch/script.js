(function() {
    var resultsHtml = '';
    var nextUrl;
    var resultsElem = $("#results");

    $("#more").hide();

    $('.submit-btn').on('click', function() {
        var userInput = $('input[name="user-input"]').val();
        var albumOrArtist = $('.artist-or-album').val();
        var url = "https://elegant-croissant.glitch.me/spotify";

        // $("#more").on("click", function() {
        //     var userInput = $(".input").val();
        //     // console.log(userInput);
        //     var albumOrArtist = $(".artist-or-album").val();
        //     console.log(albumOrArtist);
        // });


        $.ajax({
            // url on the righthand side is a variable
            // that's storing the elegant.crosissant url
            // (elegant-croissant is the proxy we are talking to,
            // that is going to get data from spotify on our behalf)
            url: url,
            data: {
                query: userInput, // what I type into the input field, query or q are ajax syntax
                type: albumOrArtist
            },
            success: function(response) {
                //console.log(response);
                // this function runs when I get response from API

                response = response.artists ||
                    response.albums;

                console.log(response.items);
                //console.log('response.text', response.next); // will throw back results of next 20 results

                nextUrl = response.next && response.next.replace('https://api.spotify.com/v1/search',url); //
                //if response.next exists, then replace, if not, then do nothing with next url
                // console.log('next.url', nextUrl);
                if (response.items.length == 0) {
                    console.log('hey makde it!');
                    resultsHtml +=
                        '<div class = "results">' + "No Result" + "</div>";
                }

                if (response.items.length == 20) {
                    $("#more").show();
                } else {
                    $("#more").hide();
                }

                // var resultsHtml = ""; ////// trying out
                for (var i = 0; i < response.items.length; i++) {
                    console.log('hey there 123');
                    if (response.items.length > 0) {
                        resultsHtml +=
                        '<a href="' + response.items[i].external_urls.spotify + '"><div class="results">' + response.items[i].name + '</div></a>';
                        // '<div class = "results"><a href="response.items">' + response.items[i].name + "</a></div>";
                    }

                    if (response.items[i].images[0]) {
                        resultsHtml +=
                            '<img class="albums" src="'+ response.items[i].images[0].url +'">' + "</img>";
                    } else {
                        //add default image
                        resultsHtml +=
                            '<img class="albums" src="http://www.inbetweengreen.ch/wp-content/uploads/2018/06/spotify-logo.jpg"></img>';
                    }
                    console.log(response.items[i].images);
                    // console.log(response.nextUrl); //it gives next 20 result
                    $("#listContainer").html(resultsHtml);
                }                    resultsElem.html(resultsHtml).show();

            } // end of for loop
        } // end of ajax sucess fct
        ); // end ajax
    }); // end click
})(); // end of function with iffi
