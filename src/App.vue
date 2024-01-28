<template>
  <div id="app">
    <h1>Transition demo</h1>

    <!-- router view -->
    <transition name="fade" mode="out-in">
      <keep-alive :include="['Two']">
        <router-view/>
      </keep-alive>
    </transition>

    <!-- navigation -->
    <nav>
      <router-link to="/">One</router-link> |
      <router-link to="/two">Two</router-link>
    </nav>
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  margin: 2rem;
}

nav,
* {
  margin-bottom: 1rem;
}

.component {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  color: white;
}

.one {
  background: red;
}

.two {
  background: blue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-enter-from,
.fade-leave-to {
  /* setting opacity at .1 to see any jump */
  opacity: 0;
}
</style>
