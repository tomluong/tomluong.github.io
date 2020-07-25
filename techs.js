var $techs = $(".techs");
$(".filters .btn").click((e) => {
    var $this = $(e.target);

    var filterClass = $this.attr("data-filter-class");
    var filter = ".default-tech, ";

    if (typeof filterClass !== "undefined") {
        filter += "." + filterClass;
    } else {
        filter = "*";
    }
    $techs.isotope({
        itemSelector: '.tech',
        layoutMode: 'fitRows',
        filter: filter
    });


});
$(".all-time").click();