<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
 <head>
  <script language="JavaScript" src="http://omilia.uio.no/glossa/js/AC_QuickTime.js"></script>
  <style>
  </style>
<script>

<?php
   $arr = array("a" => 1, "b" => 2, "c" => 3, "d" => 4);
$str = json_encode($arr);
echo "var arr = " . $str . "\n";
?>
alert(arr["c"]);

var arr1 = [1,2,3,4,5];
var arr2 = arr1.slice();
arr2[1] = 100;
alert(arr1);
alert(arr2);
</script>
 </head>
 <body>
Hi
 </body>
</html>