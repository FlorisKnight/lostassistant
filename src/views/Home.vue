<template>
  <div class="home container">
    <assistant-component id="assistantComponent"></assistant-component>
  </div>
</template>

<script>
import AssistantComponent from '../components/AssistantComponent.vue';
import * as assistantOn from '../variables';

export default {
  name: 'home',
  components: {
    AssistantComponent,
  },
  mounted() {
    if (assistantOn.isAssistantOn() === false) {
      document.getElementById('assistantComponent').style.visibility = 'hidden';
    }
  },
};
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
</style>
