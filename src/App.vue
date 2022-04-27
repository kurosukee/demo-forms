<template>
  <div id="nav">
    <router-link to="/login">Top</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: auto 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
section {
  margin: 40px auto;
}
.demo-card-article__snippet {
  font-size: 0.85rem;
  padding: 10px;
  white-space: break-spaces;
}
.alert-message {
  font-size: 0.85rem;
  color: crimson;
  margin: 10px;
}
</style>
