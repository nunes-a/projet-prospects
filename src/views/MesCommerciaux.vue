<template>
<div class="container-fluid p-0 m-0">
	<MenuComponent></MenuComponent>
<!--
  	<nav class="navbar navbar-expand-lg navbar-light">
		<a class="navbar-brand" id="logo">PROSPECTS</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
			<div class="navbar-nav" id="menutxt">
	      	
		    	<a class="nav-item nav-link active font-weight-bolder">Commerciaux</a>
			
	    		<router-link to="/admin/desprospects">
		    		<a class="nav-item nav-link text-white">Prospects</a>
				</router-link>

	    		<router-link to="/">
		    		<a class="nav-item nav-link text-white">Déconnexion</a>
				</router-link>
	    	</div>
	  	</div>
	</nav>
-->
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

import MenuComponent from '@/components/MenuComponent.vue'

export default {
	name: 'mescommerciaux',
	
	components: {
    	MenuComponent
  	},

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

.navbar {
	background-color: #25a773;
	/*padding: 15px;*/
}

#logo {
	font-family: 'Baloo Chettan', cursive;
	font-size: 30px;
	color: #ffffff;
	text-shadow: 0 0 15px #000000;
}

button {
	outline: 0;
}

a {
	text-decoration: none;
	outline: 0;
	margin: 0 20px;
}
navbar-nav > a:hover {
	background-color: #ffffff;

}




table {
	width: 80%;
	padding: 0;
	margin: 30px auto;
}

thead {
	color: #25a773;
}

table > thead > tr > th {
	border: none;
}


/*

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
}*/




/*btn*//*
a {
	font-size: 50px;
	color : #25a773;
	transition: 0.5s;
	outline: 0;
}

a:hover {
	text-decoration: none;
	color: #ccc;
}*/

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

#deconnecter {
	float: right;
}

</style>