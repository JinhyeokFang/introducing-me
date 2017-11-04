<?php
//user파일에 있는 계정 정보를 불러 비밀번호가 맞는지 확인
$on= $_POST['on'];
$url = "history.go(-1)";
if($on == true) {
	file_put_contents("processing/file.txt","Hello world!!!");
	file_put_contents("processing/data.txt","on");
} else {
	$fp = fopen('processing/file.txt', 'w');
	fwrite($fp, 'Hell world!!!');
	fclose($fp);
	$fp = fopen('processing/file.txt', 'a');
	fwrite($fp, "\n hdskfhjfk");
	fclose($fp);
	file_put_contents("processing/data.txt","off");
}
echo "<script language='javascript'>$url;</script>";
?>
