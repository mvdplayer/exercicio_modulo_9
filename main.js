$(document).ready(function() {

    $('form').on("submit", function(e){
        e.preventDefault();
    })
    
    $('#box-tap').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '</li>');
    })

    $('ul').click(function(){
        $(this).toggleClass('li');
    })
})