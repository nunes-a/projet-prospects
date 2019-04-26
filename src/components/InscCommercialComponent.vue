<template>
<div class="container-fluid p-0 m-0">


	    	<form>
	    		<div class="form-row">
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Nom" v-model="Commercial.nom" required>
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Prénom" v-model="Commercial.prenom" required>
					</div>

					<div class="form-group col-md-6">
				      <input type="text" placeholder="Référence" v-model="Commercial.ref" required>
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Type" v-model="Commercial.type" required>
					</div>

					<div class="form-group col-md-6">
				      <input type="text" placeholder="Téléphone" v-model="Commercial.tel" required>
				    </div>
					<div class="form-group col-md-6">
				      <input type="email" placeholder="E-mail" v-model="Commercial.mail" required>
					</div>
					<div class="form-group col-12 col-md-2">
					    <input type="text" placeholder="Nùmero" v-model="Commercial.adr_no" required>
					</div>
					<div class="form-group col-12 col-md-10">
					    <input type="text" placeholder="Adresse" v-model="Commercial.adr_rue" required>
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Code Postal" v-model="Commercial.adr_postal" required>
				    </div>
					<div class="form-group col-md-6">
				      <input type="text" placeholder="Ville" v-model="Commercial.adr_ville" required>
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-12">
				      <input type="password" placeholder="Mot de passe" v-model="Commercial.password" required>
				    </div>
				</div>

				<button type="button" class="btn btn-light" @click="addCommercial">Enregistrer</button>
			</form> 

		
</div>
</template>

<script>

export default {
	name: 'InscCommercialComponent',

	data: function() {
		return {
			Commercial: {
				nom:'',
				prenom:'',
				ref: '',
				type:'',
				tel:'',
				mail:'',
				adr_no:'',
				adr_rue:'',
				adr_ville:'',
				adr_postal:'',
				password:''
			}
		}
	},

	methods: {
		addCommercial(){
			let newCommercial = {
				nom: this.Commercial.nom,
				prenom: this.Commercial.prenom,
				ref: this.Commercial.ref,
				type: this.Commercial.type,
				tel: this.Commercial.tel,
				mail: this.Commercial.mail,
				adr_no: this.Commercial.adr_no,
				adr_rue: this.Commercial.adr_rue,
				adr_ville: this.Commercial.adr_ville,
				adr_postal: this.Commercial.adr_postal,
				password: this.Commercial.password
			}

			console.log(newCommercial);
			axios.post('http://51.75.126.27/prospect/public/api/commerciaux')
				.then((response) => {
	      			console.log(response);
	      		})
	      		.catch((error) => {
	      			console.log(error.response);
	      		});
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