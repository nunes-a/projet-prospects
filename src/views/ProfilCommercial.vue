<template>
<div class="container-fluid p-0 m-0">

	<MenuComponent></MenuComponent>

	<div class="ajouter">
  		<router-link to="/admin/commerciaux/"><span class="entypo-left-dir"></span> retour</router-link>
	</div>

  	<div class="card">
		<img src="../assets/commercial.jpg" class="card-img-top" alt="#">
		<div class="card-body" id="title">
	    	<h5 class="card-title"><strong> {{commerciaux.nom}} </strong> {{commerciaux.prenom}}</h5>
	  	</div>
	  	<ul class="list-group list-group-flush">
	    	<li class="list-group-item"><span class="entypo-mail"></span> {{commerciaux.mail}} </li>
	    	<li class="list-group-item"><span class="entypo-phone"></span> {{commerciaux.tel}} </li>
	    	<li class="list-group-item"><span class="entypo-location"></span> {{commerciaux.adr_no}}, {{commerciaux.adr_rue}} <br>
	    	{{commerciaux.adr_postal}}, {{commerciaux.adr_ville}}
	    	</li>
	  	</ul>
	  	<div class="card-body">
	  		<div class="row">
	  			<div class="col-12 col-md-6 p-2">
	    			<a href="#" class="card-link" id="opt">Modifier</a>
	    		</div>
	    		<div class="col-12 col-md-6 p-2">
	    			<button class="card-link" id="opt" @click="supCommercial">Supprimer</button>
	    		</div>
	    	</div>
	  	</div>
	</div>
 
</div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue'

export default {
	name: 'profilcommercial',

	components: {
		MenuComponent
	},

	data: function() {
		return {
			commerciaux: []
		}
	},

	methods: {
		supCommercial(){
			axios.delete('http://51.75.126.27/prospect/public/api/commerciaux/' + this.$route.params.id)
		}
	},
		

	mounted () {
		axios
	    	.get('http://51.75.126.27/prospect/public/api/commerciaux/' + this.$route.params.id)
    		.then(response => {
      			console.log(response.data)
      			this.commerciaux = response.data
      		})

	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}

.ajouter {
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
	text-align: right;
}

a, button {
	color: #25a773;
	outline: 0;
	text-decoration: none;
	border: none;
	background-color: transparent;
}

.card {
	margin: 20px auto;
	width: 60%;
}

.card-img-top {
	filter: grayscale(100%);
	object-fit: cover;
	object-position: 100% 25%;
	height: 120px;
}

#title {
	height: 60px;
}

strong {
	text-transform: uppercase;
}

span {
	margin-right: 15px;
}

</style>