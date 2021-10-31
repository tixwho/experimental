<template>
    <div class='cal-container'>
        <a-calendar class='center-big' v-model:value="value" :fullscreen="true" @panelChange="onPanelChange" />
  </div>
</template>

<script>
export default {
    name: 'Calendar',
    props: {},
    setup() {
        
    },
}
</script>

<style scoped>
.cal-container{
    width: 900px;
    border-style: none;
}
</style>
