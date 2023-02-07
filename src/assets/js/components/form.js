$(document).ready(function() {

    $('form').submit(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
    
        var $form = $(this);
        var serializedData = $form.serialize();
        
     
    
        $.post('/post.php', 
        serializedData,        
        function(msg) { // получен ответ сервера 
            window.open("http://leadboat.ru/spasibo.html")
        }
        
        );
    
        return false;
      })

});