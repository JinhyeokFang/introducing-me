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
      while($num) {
        $num = $num - 1;
        if (file_exists('normal/'.$num) ) {
			if (file_get_contents('normal/'.$num.'u') == $user) {
				echo '<div class="DIV"><h2 class="H2">';
          echo file_get_contents('normal/'.$num.'h');
          echo '</h2><p class="P">';
          echo '<b class="B">';
          echo file_get_contents('normal/'.$num.'d');
          echo ' written by <a href="profile.php?user='.file_get_contents('normal/'.$num.'u').'">';
          echo file_get_contents('normal/'.$num.'u');
          echo '</a></b><br>';
          echo file_get_contents('normal/'.$num);
          echo '</p><p class="comhead">comments:';
		  echo file_get_contents('normal/'.$num.'n') - 1;
		  echo '</p>';

		  if ($id != ''){
		  echo '<form action="comment.php" method="POST">';
		  echo '<input class = "input" type="text" name="comment" value="comment"><input type="hidden" name="id" value="';
		  echo $id;
		  echo '"><input type="hidden" name="num" value="';
		  echo $num;
		  echo'"><input type="submit" name="submit" value="submit"></form>';
		  }
  

		  $comment_num = file_get_contents('normal/'.$num.'n');
		  while($comment_num) {
		  	  $comment_num = $comment_num - 1;
			  if (file_exists('normal/'.$num.'r'.$comment_num)) {
				  //댓글 표시
				  echo '<p class="comment"><a href="profile.php?user='.file_get_contents('normal/'.$num.'r'.$comment_num.'u').'">';
				  echo file_get_contents('normal/'.$num.'r'.$comment_num.'u');
				  echo '</a>:';
			  	  echo file_get_contents('normal/'.$num.'r'.$comment_num);
				  echo '</p>';
			  }
		  }
		  echo '</div>';
			}
        }
      }

  //html end
    echo file_get_contents('born/end');
?>