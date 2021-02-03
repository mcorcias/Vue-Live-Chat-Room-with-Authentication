<template>
  <div class="container">
      <Navbar/>
      <ChatWindow/>
      <NewChatForm/>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import ChatWindow from '../components/ChatWindow'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watchEffect} from 'vue'
export default {
    components:{Navbar,NewChatForm,ChatWindow},
    setup(){
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