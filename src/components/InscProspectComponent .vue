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
					<div class="form-group col-md-4">
				      <input type="text" placeholder="Code Postal" name="adr_postal">
				    </div>
					<div class="form-group col-md-4">
				      <input type="text" placeholder="VIlle" name="adr_ville">
					</div>
					<div class="form-group col-md-4">
				      <input type="text" placeholder="Pays" name="pays">
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Entreprise" name="entreprise">
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Profession" name="profession">
					</div>
				</div>

				<a class="btn btn-primary">Enregistrer</a>
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

</style>