console.log('SANITY');

Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});

//////////////////////// DO NOT TOUCH ///////////////////////////

var curryObj = {
    name: "Curry",
    nickName: "Curryous",
    favFoods: ["curry", "avocado", "fish and chips", "currywurst"]
};

$('.curry-info').html(Handlebars.templates.curryid(curryObj));
