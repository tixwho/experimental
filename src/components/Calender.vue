<template>
    <a-calendar v-model:value="value" @panelChange="onPanelChange" @select="onSelect"></a-calendar>
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

</style>
