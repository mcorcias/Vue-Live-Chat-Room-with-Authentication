<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayname">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{error}}</div>
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSingup from '../composables/useSignup'
export default {
    setup(){

        const {error,signup}=useSingup()
        //refs
        const displayname=ref('')
        const email=ref('')
        const password=ref('')

        const handleSubmit=async ()=>{
           await signup(email.value, password.value, displayname.value)
           console.log('user signed up');
        }

        return {displayname,email,password,handleSubmit,error}
    }
}
</script>

<style>

</style>