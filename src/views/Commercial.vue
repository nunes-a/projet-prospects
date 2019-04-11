<template>
  <div class="container">

  	<div class="row align-items-center">

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
		    	<router-link to="/intranet/mesprospects" class="intra">
		    		<span class="entypo-vcard"></span>
		    		<p>Mon profil</p>
		    	</router-link>
		    </div>
	    </div>

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
	    		<router-link to="/intranet/mesprospects" class="intra">
		    		<span class="entypo-folder"></span>
		    		<p>Mes Prospects</p>
		    	</router-link>
		    </div>
	    </div>

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
		    	<router-link to="/" class="intra">
		    		<span class="entypo-cancel-circled"></span>
		    		<p>Déconnexion</p>
		    	</router-link>
	    	</div>
	    </div>

	</div>
 
  </div>
</template>

<script>

export default {
	name: 'commercial',

	components: {
		
	}
}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');

.container, .row {
	height: 70vh;
}

a {
	font-size: 150px;
	color : #25a773;
	transition: 0.5s;
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
	margin: -40px 0;
}

</style>