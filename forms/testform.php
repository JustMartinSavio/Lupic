<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/STPM.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSTMP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'vaasqueztobias@gmail.com';
    $mail->Password = 'epzurmoxgsbvbrxu';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('vaasqueztobias@gmail.com');

    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Subject = $_POST["subject"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo 
    "
    <script>
    alert('Enviado con exito');
    document.location.href = '/';
    </script>
    "
}
