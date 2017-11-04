<?php

	//start
	$id= $_POST['id'];
    echo file_get_contents('special/start');
	echo '<p id="b">Hello ';
	echo $id;
	echo '!</p>';

  //special
  	if ($id == ''){
		echo file_get_contents('special/Login');
	} else {
		echo '<div class="special"><p class="specialP">Main</p><p class="specialp">upload</p><form action="upload.php" method="POST"><input class = "input" type="text" name="h" value="title"><input type="hidden" name="id" value="';
		echo $id;
		echo '"><input type="submit" name="submit" value="submit"><input type="reset" value="reset"><br><textarea class="input" name="p" cols="44" rows="3"></textarea></form></div>';
		if ($id == 'hyeki0206') {
			echo file_get_contents('special/arduino1');
			echo file_get_contents('processing/data.txt');
			echo file_get_contents('special/arduino1-1');
		}
	}

    //normal
	echo '<div id="normal">';
      $num = file_get_contents('normal/num');
      while($num) {
        $num = $num - 1;
        if (file_exists('normal/'.$num)) {
          echo '<div class="DIV"><h2 class="H2">';
          echo file_get_contents('normal/'.$num.'h');
          echo '</h2>';
          echo '<b class="B">';
          echo file_get_contents('normal/'.$num.'d');
          echo ' written by <a href="profile.php?user='.file_get_contents('normal/'.$num.'u').'">';
          echo file_get_contents('normal/'.$num.'u');
		  echo '</a>';
		  if (file_get_contents('normal/'.$num.'u') == $id) {
			echo '<form action="delect.php" method="POST"><input type="hidden" name="num" value="'.$num.'"><input type="submit" name="submit" value="delect"></form>';
          }
		  echo '</b><p class="P">';
		  echo file_get_contents('normal/'.$num);
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
				  //´ñ±Û Ç¥½Ã
				  echo '<p class="comment"><a href="profile.php?user='.file_get_contents('normal/'.$num.'r'.$comment_num.'u').'">';
				  echo file_get_contents('normal/'.$num.'r'.$comment_num.'u');
				  echo '</a>:';
			  	  echo file_get_contents('normal/'.$num.'r'.$comment_num);
				  if (file_get_contents('normal/'.$num.'r'.$comment_num.'u') == $id) {
				  	 echo '<form action="comdelect.php" method="POST"><input type="hidden" name="num" value="'.$num.'"><input type="hidden" name="nnnnn" value="'.$comment_num.'"><input type="submit" name="submit" value="delect"></form>';
				  }
				  echo '</p>';
			  }
		  }
		  echo '</div>';
        }
      }
	  echo '</div>';

  //html end
    echo file_get_contents('special/end');
?>
