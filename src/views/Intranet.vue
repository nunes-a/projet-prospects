<template>
<div class="intranet">

	<div class="container">
		<div class="row">
			<div class="col-12" id="spc">
				<span class="entypo-network"></span>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<h3>PROSPECTS</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
			  	<button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal" id="btn-acc">
				  CONNECTER
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
	        <button type="button" class="btn btn-light" onclick="window.location.href='/admin/commerciaux'">Connecter</button>
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
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}
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

.entypo-network {
	color: #ffffff;
	font-family: 'Baloo Chettan', cursive;
	font-size: 200px;
	text-shadow: 0 0 10px #000000;
	padding: 0;
	margin: 0;
}

h3 {
	color: #ffffff;
	font-family: 'Baloo Chettan', cursive;
	font-size: 58px;
	text-shadow: 0 0 10px #000000;
	margin-top: -60px;
}

#btn-acc {
	width: 300px;
	height: 45px;
	padding: 0;
	margin: 0 auto;
	font-family: 'Baloo Chettan', cursive;
	font-size: 16px;
	box-shadow: 0 0 10px #000000;
}

.modal {
	font-size: 12px;
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
	outline: 0;
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
/*
span {
	font-size: 12px;
}*/

input, a {
	outline: 0;
}

</style>