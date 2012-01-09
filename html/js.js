<html>
<head>
<script>
function soup(addings){
    this.flavour = addings;
    this.add = function(more){ this.flavour += "," + more; }
    this.declare = function(){return this.flavour}
}
var dish = new soup("cheese");
</script>
</head>
<body>
<input type="button" onclick="dish.declare();" />
<input type="button" onclick="dish.add('salmon');" />
</body>
</html>
