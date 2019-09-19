<?php

$_name = $_GET["name"]; 
$_phone = $_GET["phone"];
$_company = $_GET["company"];
$_brand = $_GET["brand"];
$_job = $_GET["job"];
$_openid = $_GET["openid"];
  $arr = array(
      'qrcodeNum' => '201909182323'
  );
  $json_string = json_encode($arr);

    echo $json_string;

?>