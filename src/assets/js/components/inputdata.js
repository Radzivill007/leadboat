$(document).ready(function(){ 
    $('.tel-input').inputmask("+7 (999) 999-99-99")

    $('input[data-validate]').keyup(function() {
      if ($(this).val().replace(/[^0-9]/gi, '').length == 11) 
        $(this).parent().next().children().removeClass('btn-disabled'),
        $('.new-button').addClass('d-none')
      else 
        $(this).parent().next().children().addClass('btn-disabled'),
        $('.new-button').removeClass('d-none')
    })

    $('#testinput').keyup(function() {
        if ($(this).val().replace(/[^0-9]/gi, '').length == 11) 
            $('.btn').removeClass('btn-disabled'),
            $('.new-button').addClass('d-none')
        else 
            $('.btn').addClass('btn-disabled'),
            $('.new-button').removeClass('d-none')
      })

      $('.new-button').click(function() {
        $('input[data-validate]').addClass('input--invalid')
        setTimeout(function() { $('input[data-validate]').removeClass('input--invalid') } ,3000)
        event.preventDefault()
      })
  
    // $('form').submit(function () {
    //   var field = [];
  
    //   $(this).find('input[data-validate]').each(function () {
    //     field.push('input[data-validate]')
    //     for(i=0; i<field.length; i++) {
    //       if( $(this).val().replace(/[^0-9]/gi, '').length < 11 ) {         
    //         $('input[data-validate]').addClass('input--invalid')
    //         setTimeout(function() { $('input[data-validate]').removeClass('input--invalid') } ,3000)
    //         event.preventDefault()
    //       }
    //     }
    //   })
    // })
  })