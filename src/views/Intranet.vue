<template>
  <div class="intranet">

	<div class="container">
		<div class="row">
			<div class="col-12">
				<h3>PROSP.ECT</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
			  	<button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal" id="btn-acc">
				  Connexion
				</button>
			</div>
		</div>
	</div>


  	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Mon compte en ligne</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
			
	      	<form action="localhost/prospect/api/commerciaux" type="post">
				<input type="text" placeholder="Identifiant" name="identif" required>
				<input type="password" placeholder="Mot de passe" name="motpasse" required>

				<label>
				    <input type="checkbox" checked="checked" name="remember">
				    <span> se souvenir de moi</span>
				</label>
			</form> 

	      </div>
	      <div class="modal-footer">
	        <span class="psw">J'ai oublié ma <a href="#">mot de passe</a></span>
	        <button type="button" class="btn btn-light">Connecter</button>
	      </div>
	    </div>
	  </div>
	</div>

  </div>
</template>

<script>

export default {
  name: 'intranet',
  components: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');

.intranet {
	background-image: url("../assets/back.jpg");
	background-position: center; 
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	align-items: center;
}

h3 {
	color: #ffffff;
	padding: 20px;
	font-family: 'Baloo Chettan', cursive;
	font-size: 50px;
	text-shadow: 0 0 10px #25a773;
}

#btn-acc, p {
	width: 250px;
	margin: 0 auto;
}

.modal-content {
	border-radius: 0;
}

.modal-header {
	background-color: #25a773;
	border-radius: 0;
	color: #ffffff;
}

.close {
	color: #ffffff;
}

button {
	border-radius: 0;
	border: 0;
	transition: 0.5s;
	background-color: #25a773;
	color: #ffffff;
}

.psw {
	margin: 0 auto;
}

input[type=text], input[type=password], input[type=submit] {
	width: 90%;
	height: 40px;
	padding: 0;
	margin: 15px auto 0 auto;
	border: 1px solid #cccccc;
	box-sizing: border-box;
	text-align: center;
}

label {
	justify-content: middle;
	margin: 5px 20px;
	float: left;
}

span {
	font-size: 12px;
}


</style>