<?php
$id= $_POST['id'];
$url = "history.go(-1)";

//게시글 업로드
      $p= $_POST['p'];
      $h= $_POST['h'];
      $num = file_get_contents("normal/num");

      $today = 0;
      $today = date("F j, Y, g:i a");

      file_put_contents('normal/'.$num.'h',$h);
      file_put_contents('normal/'.$num,$p);
      file_put_contents('normal/'.$num.'u',$id);
      file_put_contents('normal/'.$num.'d',$today);
	  file_put_contents('normal/'.$num.'n',1);
	  file_put_contents('normal/'.$num.'r1',create);
      
      $num = $num + 1;
      file_put_contents("normal/num",$num);

      echo "<script language='javascript'>alert('게시글을 업로드했습니다.');$url</script>";
?>
