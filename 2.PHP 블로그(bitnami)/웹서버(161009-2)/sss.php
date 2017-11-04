<?php

$id= $_POST['id'];
$password= $_POST['password'];
$url = "history.go(-1)";

if (file_exists('user/'.$id)) {
    echo "<script language='javascript'>alert('이미 있는 계정입니다.');$url;</script>";
} else {
  extract($_GET);
  $fp=fopen('user/'.$id,"w");
  fwrite($fp,"$password \r\n");
  fclose($fp);

  echo "<script language='javascript'>alert('계정을 완성했습니다.');$url;</script>";
}

?>
