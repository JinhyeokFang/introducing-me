<?php
$id= $_POST['id'];
$comment= $_POST['comment'];
$num= $_POST['num'];
$n= file_get_contents('normal/'.$num.'n');
$url = "history.go(-1)";

//댓글 업로드
      file_put_contents('normal/'.$num.'r'.$n,$comment);
	  file_put_contents('normal/'.$num.'r'.$n.'u',$id);
	  file_put_contents('normal/'.$num.'n',$n + 1);
      echo "<script language='javascript'>$url</script>";
?>
