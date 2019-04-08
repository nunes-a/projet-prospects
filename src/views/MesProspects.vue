<template>
  <div class="mesprosp">

  	<h4>Mes prospects</h4>

	<table class="table table-striped">
	  <thead>
	    <tr>
	      <th scope="col">Nom</th>
	      <th scope="col">Prénom</th>
	      <th scope="col"></th>
	      <th scope="col"></th>
	      <th scope="col"></th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr v-for="prospect in prospects">
	      <td>{{prospect.nom}}</td>
	      <td>{{prospect.prenom}}</td>
	      <td><font-awesome-icon  v-on:click="removeProspect(prospect)" icon="trash-alt"/></td>
	      <td><font-awesome-icon icon="eye"/></td>
	      <td><font-awesome-icon icon="phone"/></td>
	    </tr>
	  </tbody>
	</table>

	<div>{{ results }}</div>
 
  </div>
</template>

<script>

export default {
	name: 'mesprospects',

	components: {

	},

	data: function() {
		return {
			prospects: [
		        { 
		        	id: 1, nom: "Nunes", prenom: "Alexandre"
		        },
		        { 
		            id: 2, nom: "José", prenom: "Miguel"
		        }
	    	],
//	    	results: []
		}
	},

	methods: {
		removeProspect: function(prospect) {
        	var index = this.prospects.indexOf(prospect);
            if (index > -1) {
                this.prospects.splice(index, 1);
            }
        }
	},

	mounted () {
	
//	    $.getJSON('http://51.75.126.27/appback/public/api/equipe/1', json => {
//          this.commerciaux = json.data
//          console.log(json.data)
//        })
//		axios
//	      .get('http://51.75.126.27/appback/public/api/equipe/1')
//	      .then(response => (this.info = response))
//		
//
//
//		axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key")
//	    .then(response => {this.results = response.data.results})

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

thead {
	background-color: #25a773;
	color: #ffffff;
}

table > thead > tr > th {
	border: none;
}

</style>