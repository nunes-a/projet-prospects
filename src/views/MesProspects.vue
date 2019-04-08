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
	      <td><span class="entypo-trash" v-on:click="removeProspect(prospect)"></span></td>
	      <td><span class="entypo-user"></span></td>
	      <td><span class="entypo-phone"></span></td>
	    </tr>
	  </tbody>
	</table>

	<div>{{ response }}</div>
 
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
	    	response: []
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
		axios
	      .get('http://51.75.126.27/appback/public/api/equipe/1')
	      .then(response => (this.info = response))
//		
//
//
//		axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key")
//	    .then(response => {this.results = response.data.results})

		}



}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}

.mesprosp {
	margin: 0 auto;
	padding: 35px;
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