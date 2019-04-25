<template>
<div class="container-fluid p-0 m-0">


	    	<form>
	    		<div class="form-row">
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Nom" name="nom" required>
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Prénom" name="prenom" required>
					</div>

					<div class="form-group col-md-6">
				      <input type="text" placeholder="Téléphone" name="tel" required>
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="E-mail" name="mail" required>
					</div>
					<div class="form-group col-12 col-md-2">
					    <input type="text" placeholder="Nùmero" name="adr_no">
					</div>
					<div class="form-group col-12 col-md-10">
					    <input type="text" placeholder="Adresse" name="adr_rue">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Code Postal" name="adr_postal">
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Ville" name="adr_ville">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
				      <input type="text" placeholder="Mot de passe" name="adr_postal">
				    </div>
				</div>

				<button type="button" class="btn btn-light">Enregistrer</button>
			</form> 

		
</div>
</template>

<script>

export default {
	name: 'InscCommercialComponent',

	data: function() {
		return {
		}
	},

	methods: {
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
	background-color: #25a773;
	color: #ffffff;
}

.entypo-user-add {
	font-size: 45px;
}

input {
	font-size: 12px;
	width: 100%;
	height: 40px;
}

button {
	border-radius: 0;
	border: 0;
	transition: 0.5s;
	background-color: #25a773;
	color: #ffffff;
	outline: 0;
	width: 100%;
}

</style>