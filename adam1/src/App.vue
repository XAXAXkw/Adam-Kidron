<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/projectscat">Projects</router-link> |
    <router-link to="/contactcomp">Contact</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: grey;
}
a {
  color: orange;
  text-shadow: 1px 1px 10px orange;
}
a:hover {
  color: lightyellow;
  text-shadow: 1px 1px 10px orange;
}
p{
  font-size: 10px;
}

nav {
  padding-bottom: 50px;
}

nav a {
  font-weight: bold;
  color: grey;
}

nav a.router-link-exact-active {
  color: orange;
  text-shadow: 1px 1px 10px orange;
}
</style>
