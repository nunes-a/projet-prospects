<template>
  <div class="intranet">
  	<form action="localhost/prospect/api/commerciaux" type="post">
  		<h4>J'accède à mon compte en ligne</h4>
		<input type="text" placeholder="Identifiant" name="identif" required>
		<input type="password" placeholder="Mot de passe" name="motpasse" required>

		<label>
		    <input type="checkbox" checked="checked" name="remember">
		    <span> se souvenir de moi</span>
		</label>

		<input type="submit" name="connect" value="Connecter">
		<br>
		<span class="psw">J'ai oublié ma <a href="#">mot de passe</a></span>
	</form> 

	<FooterComp class="footcomp"></FooterComp>
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'intranet',
  components: {
    FooterComp
  }
}
</script>

<style scoped>

form {
	width: 400px;
	margin: 10px auto;
	padding: 20px;
	border: 2px solid #f1f1f1;
}

input[type=text], input[type=password], input[type=submit] {
	width: 350px;
	height: 40px;
	padding: 0;
	margin: 15px auto 0 auto;
	border: 1px solid #cccccc;
	box-sizing: border-box;
	text-align: center;
}

input[type=submit] {
	margin: 10px auto;
	cursor: pointer;
	border: none;
	background-color: #f7b200;
	transition: 0.5s;
}

input[type=submit]:hover {
	background-color: #ffffff;
	box-shadow: 0 0 10px #f7b200;
}

label {
	justify-content: middle;
	margin: 5px 20px;
	float: left;
}

span {
	font-size: 12px;
}

.footcomp {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
}

</style>