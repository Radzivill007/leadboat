$(document).ready(function(){
    $.fn.equivalent = function (){
            //запишем значение jQuery выборки к которой будет применена эта функция в локальную переменную $blocks
        var $blocks = $(this),
            //примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH
            maxH = $blocks.eq(0).height()

        //делаем сравнение высоты каждого блока с максимальной
        $blocks.each(function(){  
            if ( $(this).height() > maxH ) {
                maxH = $(this).height()
            }
        });
        //устанавливаем найденное максимальное значение высоты для каждого блока jQuery выборки
        $blocks.height(maxH)
    }
    //применяем нашу функцию в элементам jQuery выборки - $('.fb__slide-inner')
    $('.equivalent').equivalent()
})