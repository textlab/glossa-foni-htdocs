<?php
  // Little ja - php test


$file = $_GET['file'];
$start = $_GET['start'];
$duration = $_GET['duration'];


?>
<script>

var file = <?php echo "'$file'"; ?>;
var start = <?php echo "'$start'"; ?>;

var duration = <?php echo "'$duration'"; ?>;
alert('well bugger me!');
parent.createPlayer(file, start, duration);
</script>

