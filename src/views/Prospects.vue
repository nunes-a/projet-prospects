<template>
<div class="container-fluid p-0 m-0">

	<MenuComponent></MenuComponent>

	<table class="table table-striped">
		<thead>
	    	<tr>
	    		<th scope="col">Nom</th>
	    		<th scope="col">Prénom</th>
	    		<th scope="col"></th>
	    	</tr>
	 	</thead>
	  	<tbody>
	    	<tr v-for="prospect of prospects">
	    		<td>{{prospect.nom}}</td>
	    		<td>{{prospect.prenom}}</td>
	    		<td><router-link :to="'/admin/prospects/' + prospect.id"><span class="entypo-eye"></span></router-link></td>
	    	</tr>
	  	</tbody>
	</table>


</div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue'

export default {
	name: 'prospects',
	
	components: {
    	MenuComponent
  	},

	data: function() {
		return {
	    	prospects: []
		}
	},

	mounted () {
		axios
	    	.get('http://51.75.126.27/prospect/public/api/prospects')
      		.then(response => {
      			console.log(response.data)
      			this.prospects = response.data
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
	margin: 20px auto;
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

</style>