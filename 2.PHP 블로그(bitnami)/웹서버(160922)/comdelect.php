<?php
$num= $_POST['num'];
$n = $_POST['nnnnn'];
$url = "history.go(-1)";

unlink('normal/'.$num.'r'.$n);
unlink('normal/'.$num.'r'.$n.'u');

echo "<script language='javascript'>".$url."</script>";
?>
