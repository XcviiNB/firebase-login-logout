<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand p-2">NewWorld</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav ms-auto" v-show="!loggedIn">
          <router-link to="/register" class="nav-link">Register</router-link>
          <router-link to="/login" class="nav-link">Login</router-link>
        </div>
        <div class="navbar-nav ms-auto" v-show="loggedIn">
          <a href="/register" class="nav-link" @click="logout">Logout</a>
        </div>
      </div>          
    </div>
  </nav>



  <RouterView/>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref,onMounted } from 'vue'
  import { onAuthStateChanged, signOut } from '@firebase/auth';
  import { auth } from './firebase/index.js'
  import router from './router'

  const loggedIn = ref(false)

  onMounted(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        loggedIn.value = true
        router.push('/')
      } else {
        router.push('/register')
      }
    })
  })

  const logout = () => {
    signOut(auth)
    .then(() => {
      loggedIn.value = false
    })
  }
</script>