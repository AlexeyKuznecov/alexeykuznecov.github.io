<?php
$name = trim(htmlspecialchars($_POST['name']));
$phone = trim(htmlspecialchars($_POST['phone']));
// $to      = 'atikakovr@mail.ru';
$to      = 'alexkuznecov97@mail.ru';
$subject = 'Заявка с сайта Max-Print - печатный центр на Брюсова, 27';
$message = "Вас просят перезвонить " . $name . ".\r\nПо телефону: " . $phone;
if(mail($to, $subject, $message)){
	header('location: thankyou.html');
}
?>

