<template>
  <div class="prosp">

	<div class="card" > <!--v-for="commercial in commerciaux">-->
	  <h4 class="card-header">
	  	<strong> {{commerciaux.nom}} </strong> {{commerciaux.prenom}}
	  </h4>
	  <div class="card-body" id="profilDtls">
	    <div class="card-text">
	    	<p> {{commerciaux.mail}} </p>
	    	<p> {{commerciaux.tel}} </p>
	    	<p> {{commerciaux.adr_no}}, {{commerciaux.adr_rue}} </p>
	    	<p> {{commerciaux.adr_postal}}, {{commerciaux.adr_ville}} </p>
	    </div>

	    <a href="#" class="btn btn-primary">Modifier</a>
		<a href="#" class="btn btn-primary">Supprimer</a>
	  </div>
	</div>

 
  </div>
</template>

<script>

export default {
	name: 'profilcommercial',

	components: {

	},

	data: function() {
		return {
			commerciaux: []
		}
	},

	mounted () {
		//var ide = this.$route.params.id;
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

.prosp {
	margin: 0 auto;
	padding: 35px;
}

.card-header {
	background-color: #25a773;
	border-radius: 0;
	color: #ffffff;
}

strong {
	text-transform: uppercase;
}

#profilDtls > a {
	border-radius: 0;
	border: 0;
	transition: 0.5s;
	background-color: #25a773;
	color: #ffffff;
	margin: 5px 20px 5px 20px;
	width: 150px;
}

</style>