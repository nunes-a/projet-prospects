<template>
  <div class="mesprosp">

  	<h4>Mes prospects</h4>

	<table class="table table-striped">
	  <thead>
	    <tr>
	      <th scope="col">id</th>
	      <th scope="col">Nom</th>
	      <th scope="col">Prénom</th>
	      <th scope="col"></th>
	      <th scope="col"></th>

	    </tr>
	  </thead>
	  <tbody>
	    <tr v-for="prospect in prospects">
	      <td>{{prospect.id}}</td>
	      <td>{{prospect.nom}}</td>
	      <td>{{prospect.prenom}}</td>
	      <td><button class="btn btn-danger btn-sm" v-on:click="removeProspect(id)">X</button></td>
	      <td>O</td>
	    </tr>
	  </tbody>
	</table>

 
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'

export default {
	name: 'mesprospects',

	components: {
		FooterComp
	},

	data: function() {
		return {
			prospects: [
		        { 
		        	id: 1, 
		            nom: "Nunes",
		            prenom: "Alexandre"
		        },
		        { 
		            id: 2, 
		            nom: "José",
		            prenom: "Miguel"
		        }
	    	]
		}
	},

	methods: {
		removeProspect: function(id) {
        	var index = this.prospects.indexOf(id);
            if (index > -1) {
                this.prospects.splice(index, 1);
            }
        }
	}


}
</script>

<style scoped>

.mesprosp {
	/*width: 400px;*/
	margin: 10px auto;
	padding: 20px;
	/*border: 2px solid #f1f1f1;*/
}

table {
	width: 350px;
	padding: 0;
	margin: 20px auto;
}

table > thead > tr > th {
	border: none;
	color: #f7b200;
}

</style>