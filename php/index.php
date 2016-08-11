<?php

function isEmail($email) {
  return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_POST) {
  $to = 'kaiser@fapl.co';

  $name = addslashes(trim($_POST['name']));
  $from = addslashes(trim($_POST['email']));
  $subject = 'Message from website';
  $message = addslashes(trim($_POST['message']));

  $array = array('nameMessage' => '', 'emailMessage' => '', 'messageMessage' => '');

  if ( $name == '' ) {
    $array['nameMessage'] = 'Please enter a name';
  }
  if ( !isEmail($from) ) {
    $array['emailMessage'] = 'Please enter a valid email address';
  }
  if ( $message == '' ) {
    $array['messageMessage'] = 'Please enter your message';
  }

  if ( $name != ''  && isEmail($from) && $message != '' ) {
    $header = "From: " . $from . " <" . $from . ">" . "\r\n" . "Reply-To: " . $from;
    mail( $to, $subject . $message, $header );
  }

  echo json_encode($array);
}

?>
