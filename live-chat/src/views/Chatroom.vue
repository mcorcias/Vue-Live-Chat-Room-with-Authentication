<template>
  <div class="container">
      <Navbar/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watchEffect} from 'vue'
export default {
    components:{Navbar},
    setup(props,context){
      const router = useRouter()

      const {user}= getUser()

      watchEffect(()=>{
        if (!user.value){
          router.push({name:'Welcome'})
        }
      })


      return{user}
    }
}
</script>

<style>

</style>