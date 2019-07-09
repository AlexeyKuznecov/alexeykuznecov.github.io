<?php
$name = trim(htmlspecialchars($_POST['name']));
$phone = trim(htmlspecialchars($_POST['phone']));
$to      = 'sergey.mironov@velior.ru';
$subject = 'Заявка с сайта Мастер на час в Иванове';
$message = "Вас просят перезвонить " . $name . ".\r\nПо телефону: " . $phone;
if(mail($to, $subject, $message)){
	header('location: thankyou.html');
}
?>