var head = $('.select__head')
var list = $('.select__list')
var item = $('.select__item')

function hideDropdown() {
    list.slideUp()
    setTimeout(function() { head.removeClass('open') }, 400)
} 
function showDropdown() {
    list.slideDown()  
    head.addClass('open')    
}

$(document).click(function (e) {                   
    if ( $(head).is(e.target) ) {                    
        if (head.hasClass('open'))                    
            hideDropdown()                         
        else                                           
            showDropdown()                          
    }
    else if ( $(item).is(e.target) ) {              
        hideDropdown()                 
        head.text(e.target.innerHTML).css({ color: 'black' })
    }
    else {                                          
        if (head.hasClass('open'))                     
            hideDropdown()                             
    }                                                 
})

$('#loadfile').change(function() {
    if ($(this).val() != '') 
        $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length)
})
