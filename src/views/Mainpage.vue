<template>
  <div id='cent'>
    <calender></calender>
  </div>
</template>

<script>
import Calender from '../components/Calender.vue'
export default {
    name: 'Homepage',
    components: {
        Calender

    },
    setup() {
        
    },
}
</script>

<style scoped>
#cent {
  height:400px;
  border-style:none;    
  display:flex;
  justify-content:center;     
    /* aa只要三句话就可以实现不定宽高水平垂直居中。 */
}
</style>
