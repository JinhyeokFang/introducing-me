<?php
$num= $_POST['num'];
$url = "history.go(-1)";

//´ñ±Û»èÁ¦
$n = file_get_contents('normal/'.$num."n");
while($n) {
	$n = $n - 1;
	if (file_exists('normal/'.$num."r".$n)) {
		unlink('normal/'.$num."r".$n);
		unlink('normal/'.$num."r".$n."u");
	}
}
unlink('normal/'.$num."d");
unlink('normal/'.$num."h");
unlink('normal/'.$num."u");
unlink('normal/'.$num."n");
unlink('normal/'.$num."");

echo "<script language='javascript'>".$url."</script>";
?>
