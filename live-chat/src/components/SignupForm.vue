<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayname">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        //refs
        const displayname=ref('')
        const email=ref('')
        const password=ref('')

        const handleSubmit=()=>{
            console.log(displayname.value,email.value,password.value);
        }

        return {displayname,email,password,handleSubmit}
    }
}
</script>

<style>

</style>