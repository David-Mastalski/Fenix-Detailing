<?php
    $admin = 'mastalskid79@gmail.com';
    $user_name = $_POST['name'];
    $message_title = 'FORMULARZ KONTAKTOWY | WWW.FENIXDETAILING.PL';
    $user_address_email = $_POST['email'];
    $user_message = $_POST['message'];

    $robotsListener = $_POST['robots-input'];

    if(empty($robotsListener)){

        $message = "Dostałeś nową wiadomość od: " . $user_name . "\r\n" . "E-mail: " . $user_address_email . "\r\n" . "\r\n". "Treść: " . $user_message;

        $headers = "From: " . $user_address_email . "\r\n";
        $headers .= "Reply-to: " . $user_address_email . "\r\n";

        $mail_status = mail($admin,$message_title,$message,$headers);

        if($mail_status){
            header("Location: ../index.html?mail_status=sent");
        }

    }else{
        header("Location: ../index.html?mail_status=error");
    }
?>