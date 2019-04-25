<template>
<div class="container-fluid p-0 m-0">

	<MenuComponent></MenuComponent>

	<div class="ajouter">
		<a type="button" class="btn" data-toggle="modal" data-target="#exampleModal" id="btn-acc">
			<span class="entypo-list-add"></span> ajouter commercial
		</a>
	</div>

	<table class="table table-striped">
		<thead>
	    	<tr>
	    		<th scope="col">Nom</th>
	    		<th scope="col">Prénom</th>
	    		<th scope="col"></th>
	    	</tr>
	 	</thead>
	  	<tbody>
	    	<tr v-for="commercial of commerciaux">
	    		<td>{{commercial.nom}}</td>
	    		<td>{{commercial.prenom}}</td>
	    		<td><router-link :to="'/admin/commerciaux/' + commercial.id"><span class="entypo-eye"></span></router-link></td>
	    	</tr>
	  	</tbody>
	</table>

  	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
	    	<div class="modal-content">
	    		<div class="modal-header">
	    			<h5 class="modal-title" id="exampleModalLabel">Ajouter un nouveau commercial</h5>
	        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          			<span aria-hidden="true">&times;</span>
	        		</button>
	      		</div>
	      		<div class="modal-body">
		      		<InscCommercialComponent></InscCommercialComponent>
		    	</div>
	    	</div>
	 	</div>
	</div>

</div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue'
import InscCommercialComponent from '@/components/InscCommercialComponent.vue'

export default {
	name: 'commerciaux',
	
	components: {
    	MenuComponent,
    	InscCommercialComponent
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

table {
	width: 80%;
	padding: 0;
	margin: 0 auto;
}

thead {
	color: #25a773;
}

table > thead > tr > th {
	border: none;
}

a {
	color: #25a773;
	outline: 0;
	text-decoration: none;
}

.ajouter {
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
	text-align: right;
	color: #25a773;
}

.modal {
	font-size: 12px;
}
.modal-header {
	background-color: #25a773;
	border-radius: 0;
	color: #ffffff;
}

.close {
	color: #ffffff;
}
</style>