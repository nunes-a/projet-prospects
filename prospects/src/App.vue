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
  padding: 20px;
  margin: 0;
  background-color: #333333;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #eeeeee;
  margin-right: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.intra {
  float: right;
  margin-right: 0;
}
</style>
