
<?php
if (!$_POST) exit('No direct script access allowed');
if (!isset($_POST['f'])) exit('No direct script access allowed');
if (!isset($_POST['f']['name'])) exit('No direct script access allowed');
if (!isset($_POST['f']['phone'])) exit('No direct script access allowed');
 
$name = trim(strip_tags($_POST['f']['name']));
$phone = trim(strip_tags($_POST['f']['phone']));
 
 if (!$phone)
 {
    exit('<h3 class="h3 modal-title text-center mb-3">Ошибка в данных</h3> <p> Не указано телефон! Обновите страницу (F5) и укажите свой телефон</p>');
 }
 
$to = 'dvsharko@gmail.com'; // адрес получателя
// $to = 'yurazlat@yandex.ru'; // адрес получателя

$subject = 'Заявка Leadboat'; // тема письма
 
// формируем тело сообщения
$message = 'Имя: ' . $name . "\r\n" . 'Phone: ' . $phone; 

// Не трогать!!!
$headers = 'From:' . 'zakaz@leadboat.ru' . "\r\n"; // от кого
 
// кодируем заголовок в UTF-8
$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
 
// отправка
@mail($to, $subject, $message, $headers);
 
echo '<h3 class="h3 modal-title text-center mb-3">Спасибо за заявку</h3> <p>Мы свяжемся с вами в течение 1 часа.</p>';

?>

