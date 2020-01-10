$(document).ready(function() {
    $("#search").keyup(function() {
        var alben = $(".album");
        $(alben).show();

        var searchTerm = $(this).val().toLocaleLowerCase();
        
        alben.each(function(){
            if ($(this).text().toLocaleLowerCase().search(searchTerm) == -1) {
                $(this).hide();
            }
        });
    });
});
