(function() {

    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    var username, password, userToSearch;

    $('.submit-button').on('click', function() {
        //console.log('.submit-button clicked!!!');
        username = $('input[name="username"]').val();
        password = $('input[name="password"]').val();
        userToSearch = $('input[name="user-to-search"]').val();
        // console.log('username: ', username);
        // console.log('password: ', password);
        // console.log('userToSearch: ', userToSearch);

        // baseUrl
        var baseUrl = 'https://api.github.com';

        // Endpoint -- specifies data to retrieve
        // in this case we need user's repo

        var endpoint = '/users/' + userToSearch + '/repos';
        var endpointCommits = '/users/' + userToSearch + '/repos/archive/commits';
        //console.log('baseUrl + endpoint: ', baseUrl + endpoint);

        $.ajax({
            url: baseUrl + endpoint,
            headers: {
                Authorization: 'Basic ' + btoa(username + ":" + password)
            },
            success: function(response) {
                console.log('response', response);
                // step 3 -- pass data to the template in your JS file
                var myReposTemplate = Handlebars.templates.reposTemplate({
                    repos: response
                }); //closes myReposTemplate

                //step 4 -- append the template to the DOM so we can see it onscreen
                $('.repos-container').html(myReposTemplate);
                // the only info we need is
                //full_name and avatar_url
            } // closes success
        }); // closes ajax

        $.ajax({
            url: baseUrl + endpointCommits,
            headers: {
                Authorization: 'Basic ' + btoa(username + ":" + password)
            },
            success: function(response) {
                console.log('response', response);
                // step 3 -- pass data to the template in your JS file
                var myReposTemplate = Handlebars.templates.commisTemplate({
                    repos: response
                }); //closes myReposTemplate

                //step 4 -- append the template to the DOM so we can see it onscreen
                $('.repos-container').html(myReposTemplate);
                // the only info we need is
                //full_name and avatar_url
            } // closes success

        }); // closes ajax

    }); // closes on. click event

})(); // closes & invokes iife
