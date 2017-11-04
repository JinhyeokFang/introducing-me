<?php
  //html start
    echo file_get_contents('born/start');

  //special
    echo file_get_contents('special/Main');
	echo file_get_contents('special/arduino1');
	echo file_get_contents('processing/data.txt');
	echo file_get_contents('special/arduino1-1');

    //normal
      $num = file_get_contents('normal/num');
      while($num > 0) {
        $num = $num - 1;
        if (file_exists('normal/'.$num)) {
          echo '<div class="DIV"><h2 class="H2">';
          echo file_get_contents('normal/'.$num.'h');
          echo '</h2><p class="P">';
          echo '<b class="B">';
          echo file_get_contents('normal/'.$num.'d');
          echo ' written by <a href="profile.php?user='.file_get_contents('normal/'.$num.'u').'">';
          echo file_get_contents('normal/'.$num.'u');
          echo '</a></b><br>';
          echo file_get_contents('normal/'.$num);
          echo '</p></div>';
        }
      }
  //script
    echo file_get_contents('js/js');

  //html end
    echo file_get_contents('born/end');
?>
