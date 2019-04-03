<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/intranet" class="intra">Intranet</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 50px;
  padding: 0;
  margin: 0;
  background-color: #f7b200;
  text-align: left;
  line-height: 50px;
}


#nav a {
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  padding: 0 20px;
  text-decoration: none;
  display: inline-block;
}

#nav a.router-link-exact-active {
  color: #f7b200;
  background-color: #fff;
}

.intra {
  float: right;
}

a:target {
  border: none;
}
</style>
