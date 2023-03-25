<template>
  <div>
   <ul>
    <li v-for="item in sale" :key="item.id">
    {{ item.name }}
{{ item.price }}</li>
<button v-on:click="zx">降</button>
<button v-on:click="z">降价</button>
   </ul>
  </div>
</template>

<script>

export default {
computed:{
    sale(){
      return this.$store.getters.sale
    }
},
methods:{
    zx(){
     this.$store.commit('sale',7)
    },
    z(){
     this.$store.dispatch('action',7)
    }
}
}
</script>

<style>

</style>