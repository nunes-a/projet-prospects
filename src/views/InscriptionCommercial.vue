<template>
  <div class="prosp">

	<div class="card">
	  <h4 class="card-header"><span class="entypo-user-add"></span></h4>
	  <div class="card-body" id="profilDtls">
	    <div class="card-text">
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
			</form> 
	    </div>
		<a href="#" class="btn btn-primary">Enregistrer</a>
	  </div>
	</div>
  </div>
</template>

<script>

export default {
	name: 'inscriptioncommercial',

	components: {

	},

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
	background-color: #25a773;
	color: #ffffff;
}

.entypo-user-add {
	font-size: 45px;
}

input {
	width: 100%;
	height: 40px;
}

</style>