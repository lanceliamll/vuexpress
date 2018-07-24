<template>
  <div>
    <div class="container">
      <input type="text">
      <input type="text">
      <ul>
        <li v-for = "user in users" :key ="user.username"> {{user.username}}</li>
        <li v-for = "user in users" :key ="user.password"> {{user.password}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data(){
    return{
      users: store.getters.getUsers
    }
  }
}
</script>

<style>

</style>
