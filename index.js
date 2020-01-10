$(document).ready(function() {
    $("#search").keyup(function() {
        var alben = $(".album");
        $(alben).show();
        
        var searchTerm = $(this).val().toLovalLowerCase();
        
        alben.each(function() {
            if ($(this).text.toLowerCase().search(searchTerm) == -1) {
                $(this).hide();
            }
        });
    });
});
