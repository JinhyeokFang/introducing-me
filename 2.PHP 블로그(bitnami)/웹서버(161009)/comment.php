<?php
//user파일에 있는 계정 정보를 불러 비밀번호가 맞는지 확인
$id= $_POST['id'];
$password= $_POST['password'];
$url = "history.go(-1)";

if (file_exists('user/'.$id)) {
    $hhh = file_get_contents('user/'.$id);
    $hhh = $hhh + 1;
    $password = $password + 1;
    if ($password != $hhh) {
      echo "<script language='javascript'>alert('로그인에 실패했습니다.');$url;</script>";
    } else {
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
      
      $num = $num + 1;
      file_put_contents("normal/num",$num);

      echo "<script language='javascript'>alert('게시글을 업로드했습니다.');$url</script>";
    }
} else {
    echo "<script language='javascript'>alert('로그인에 실패했습니다.');$url;</script>";
}
?>
