  <td>
<script language="javascript">
document.write("<input id='addRowsButton' type='button' value='add phrase' onClick='writeWidgetTokenRow()'></input>");
document.write("<input id='delRowsButton' type='button' value='delete phrase' onClick='delWidgetTokenRow()' disabled></input>");
</script>
  </td>
 </tr>
 <?php
  if ($_GET['fullQuery'] == 'yes') {
    echo "<script language='javascript'>fullQuery='yes';</script>";
  }
 ?>
 <script language="javascript">writeWidgetTokenRow(0);</script>
  <tr>
  <td valign="top" style="background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae">
   <table border="0" width="100%">
    <tr>
     <td valign="top">
       <input name="query_corpus" type="hidden" value="<?php echo $_GET['corpus'] ?>"></input>
       <input name="query_root" type="hidden" value="/hf/foni/tekstlab/glossa-0.7/dat/"></input>
       <span class="txt"><script language="javascript">document.write(strings[language]['regexp'])</script>: <input type="checkbox" name="query_regex"><br>


<?php
  if(strpos($_GET['corpus'], 'euro_news_fr') === false && !$speech) { // would be good to get rid of this reference to euro_news_fr!!
?>			      
       <script language="javascript">document.write(strings[language]['search_within'])</script>: <input type="text" size="2" name="query_within" value="s"></input>
<?php } ?>


       </span>
     </td>
     <td valign="top" style="padding-left:15px">
      <span class="txt"><script language="javascript">document.write(strings[language]['hits'])</script>: <input type=text name="query_results_page" value="20" size="5"><br>
      <script language="javascript">document.write(strings[language]['max_res'])</script> :</span> <input type=text name="query_results_max" value="2000" size="5"><br></span>
     </td>
     <td valign="top" style="padding-left:15px;text-align:left">
      <span class="txt2"><script language="javascript">document.write(strings[language]['rand'])</script> <input type="checkbox" name="query_results_random"></input></span><br>
      <span class="txt2"><nobr><script language="javascript">document.write(strings[language]['fastcut'])</script> <input type="checkbox" name="query_results_fastcut" checked></input><nobr></span><br />
<?php
	if($speech){
?>
      <span class="txt2"><nobr><script language="javascript">document.write(strings[language]['concordance'])</script> <input type="checkbox" name="query_results_concordance"></input><nobr></span>
<?php
      	}
?>
     </td>




<?php   // What to display. Eg phonetic, orthograpic, both.. For corpora with the key "dual" ( an array ) in the index_config.json
  if($dual){
?>
    <td align="right">
<?php
    $i = 0;
    $checked = " checked=true";
    foreach ( $dual as $att ){
?>
      <span class="txt2"><?php echo $att; ?><input type='radio' name='atttype' id='atttype' value='<?php echo $i; ?>' <?php echo $checked; ?> /></span><br />
<?php
	$i+=2;
	$checked = "";
    }
?>
      <span class="txt2">Both<input type='radio' name='atttype' id='atttype' value='x' /></span>
     </td>
<?php
  }
// End of what to display
?>


<?php
     if(!$speech){
?>
     <td valign="top" style="padding-left:30px">
       <script language="javascript">document.write(strings[language]['context'])</script>:<br>
       <?php if ($corpus != 'skriv') { ?>
       <input type="radio" name="query_context_type" value="sentences"><script language="javascript">document.write(strings[language]['sent'])</script>
       <?php } ?>
       <input type="radio" name="query_context_type" value="chars" checked><script language="javascript">document.write(strings[language]['word'])</script><br>
       &nbsp;<input type="TEXT" name="query_context_left" SIZE=1 value="7"><span class="txt2"><script language="javascript">document.write(strings[language]['left'])</script></span>
       &nbsp;<input type="TEXT" name="query_context_right" SIZE=1 value="7"><span class="txt2"><script language="javascript">document.write(strings[language]['right'])</script></span>
     </td>
<?php
		}
     else{
?>

      <input type="hidden" name="query_context_type" value="sentences" /> 
      <input type="hidden" name="query_context_left" value="0" /> 
      <input type="hidden" name="query_context_right" value="0" />
<?php
	 }
?>
    </tr>
   </table>
  </td>
