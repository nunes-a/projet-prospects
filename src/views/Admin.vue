<template>
  <div class="container">

  	<div class="row align-items-center">

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
		    	<router-link to="/admin/mescommerciaux" class="intra">
		    		<span class="entypo-vcard"></span>
		    		<p>Mes Commerciaux</p>
		    	</router-link>
		    </div>
	    </div>

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
	    		<router-link to="/admin/desprospects" class="intra">
		    		<span class="entypo-folder"></span>
		    		<p>Des Prospects</p>
		    	</router-link>
		    </div>
	    </div>

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
		    	<router-link to="/" class="intra">
		    		<span class="entypo-cancel-circled"><p>Déconnexion</p></span>
		    		
		    	</router-link>
	    	</div>
	    </div>

	</div>
 
  </div>
</template>

<script>
export default {
	name: 'admin'

}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');

.container, .row {
	height: 70vh;
	transition: 0.5;
}

a {
	font-size: 150px;
	color : #25a773;
	outline: 0;
	transition: 0.5s;
	padding: 0;
	margin: 0;
	height: 250px;
	width: 250px;
}

a:hover {
	text-decoration: none;
	color: #ccc;
}

p {
	font-family: 'Baloo Chettan', cursive;
	font-size: 20px;
	text-align: center;
	padding: 0;
	margin: -30px 0;
}
/*
a:target {
  border: none;
}*/

#fond-icon {
	border: 2px solid black;
	height: 250px;
	width: 250px;
	padding: 0;
	margin: 0;
}

</style>