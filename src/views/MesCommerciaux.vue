<template>
  <div class="container">

  	<div class="row align-items-center">

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
		    	<router-link to="/intranet/mescommerciaux" class="intra">
		    		<span class="entypo-vcard"></span>
		    		<p>Mes Commerciaux</p>
		    	</router-link>
		    </div>
	    </div>

	    <div class="col-12 col-md-4 p-3">
	    	<div id="fond-icon">
	    		<router-link to="/intranet/admin_mescommerciaux" class="intra">
		    		<span class="entypo-folder"></span>
		    		<p>Des Prospects</p>
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





	<table class="table table-striped">
	  <thead>
	    <tr>
	      <th scope="col">Nom</th>
	      <th scope="col">Prénom</th>
	      <th scope="col"></th>
	      <th scope="col"></th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr v-for="commercial of commerciaux">
	      <td>{{commercial.nom}}</td>
	      <td>{{commercial.prenom}}</td>
	      <td><router-link :to="'/admin/mescommerciaux/profil/' + commercial.id"><span class="entypo-eye"></span></router-link></td>
	      <td><span class="entypo-phone"></span></td>

	    </tr>
	  </tbody>
	</table>
 
  </div>

</template>

<script>

export default {
	name: 'mescommerciaux',

	data: function() {
		return {
	    	commerciaux: []
		}
	},

	mounted () {
		axios
	    	.get('http://51.75.126.27/prospect/public/api/commerciaux')
      		.then(response => {
      			console.log(response.data)
      			this.commerciaux = response.data
      		})
		}

}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');

.mesprosp {
	margin: 0 auto;
	padding: 0;
}

table {
	width: 350px;
	padding: 0;
	margin: 20px auto;
}

thead {
	background-color: #25a773;
	color: #ffffff;
}

table > thead > tr > th {
	border: none;
}




/*btn*/
a {
	font-size: 50px;
	color : #25a773;
	transition: 0.5s;
	outline: 0;
}

a:hover {
	text-decoration: none;
	color: #ccc;
}

p {
	font-family: 'Baloo Chettan', cursive;
	font-size: 15px;
	text-align: center;
	padding: 0;
	margin: -15px 0;
}

table > thead > tr > td > router-link > span {
	font-size: 20px;
	line-heigth: 20px;
}

</style>