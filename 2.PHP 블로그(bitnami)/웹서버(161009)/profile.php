<?php
  //html start
    echo file_get_contents('born/start');

  //special
    $user= $_GET['user'];
    file_put_contents("temp","".$user);
    $user= file_get_contents("temp");
	echo '<div class="special"><h2 class="specialP">';
    echo $user."님의 프로필입니다.";
    echo '</h2><p class="specialp">';
    echo "환영합니다!!!<br>";
    echo '</p>';
	echo "<a href='index.php'>메인으로 이동</a></div>";

  //normal
    $num = file_get_contents('normal/num');
      while($num > 0) {
        $num = $num - 1;
        $u = file_get_contents('normal/'.$num.'u');
        if (file_exists('normal/'.$num) && $user == $u) {
            echo '<div class="DIV"><h2 class="H2">';
            echo file_get_contents('normal/'.$num.'h');
            echo '</h2><p class="P">';
            echo '<b class="B">';
            echo file_get_contents('normal/'.$num.'d');
            echo '</b><br>';
            echo file_get_contents('normal/'.$num);
            echo '</p></div>';   
        }
      }

  //html end
    echo file_get_contents('born/end');
?>