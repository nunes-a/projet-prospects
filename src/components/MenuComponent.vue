<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" id="logo">PROSPECTS</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav" id="menutxt">
          
          <a class="nav-item nav-link active font-weight-bolder">Commerciaux</a>
      
          <router-link to="/admin/desprospects">
            <a class="nav-item nav-link text-white">Prospects</a>
        </router-link>

          <router-link to="/">
            <a class="nav-item nav-link text-white">Déconnexion</a>
        </router-link>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

<style scoped>
@import url(http://weloveiconfonts.com/api/?family=entypo);
[class*="entypo-"]:before {font-family: 'entypo', sans-serif;}
@import url('https://fonts.googleapis.com/css?family=Baloo+Chettan');

.navbar {
  background-color: #25a773;
  /*padding: 15px;*/
}

#logo {
  font-family: 'Baloo Chettan', cursive;
  font-size: 30px;
  color: #ffffff;
  text-shadow: 0 0 15px #000000;
}

button {
  outline: 0;
}

a {
  text-decoration: none;
  outline: 0;
  margin: 0 20px;
}
navbar-nav > a:hover {
  background-color: #ffffff;

}

</style>