<?php
  if ( isset($_POST["submit"]) ) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $from = '$email';
    $to = 'kaiser@fapl.co';
    $subject = 'Message from website';
    $body = '$message';

    if ( !$_POST['name'] ) {
      $errName = 'Please enter your name';
    }

    if ( !$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
      $errEmail = 'Please enter a valid email address';
    }

    if ( !$_POST['message'] ) {
      $errMessage = 'Please enter your message';
    }

    if ( !$errName && !$errEmail && !$errMessage ) {
      if ( mail($to, $subject, $body, $from) ) {
        $result = '<div class="alert alert-success"> Your message has been sent! </div>';
      }
      else {
        $result = '<div class="alert alert-danger"> There was an error sending your message. </div>';
      }
    }
  }
?>
