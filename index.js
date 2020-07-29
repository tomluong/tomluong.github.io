$("p").each(function(index) {
    var $this = $(this);

    var html = $this.html();

    while (html.indexOf(". ") > -1) {
        html = html.replace(". ", ".&nbsp;&nbsp;");
    }

    while (html.indexOf(", ") > -1) {
        html = html.replace(", ", ",&nbsp;&nbsp;");
    }
    
    $this.html(html);
});