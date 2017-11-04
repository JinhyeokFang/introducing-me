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
	   echo '로그인이 완료되었습니다.';
	   echo '<form action="index.php" method="POST"><input type="hidden" name="id" value="'.$id.'"><input type="submit" name="확인" value="확인"></form>';
	}
} else {
    echo "<script language='javascript'>alert('로그인에 실패했습니다.');$url;</script>";
}
?>
