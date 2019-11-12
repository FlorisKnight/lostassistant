<template>
  <div class="about">
    <div id="content">
    <h1>About</h1>
    <p>Lorem Ipsum is simply dummy text
      of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make
      a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.</p>
    </div>
      <assistant-component id="assistantComponent"></assistant-component>
  </div>
</template>

<script>
import AssistantComponent from '../components/AssistantComponent.vue';
import * as assistantOn from '../variables';

export default {
  name: 'about',
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
  #content {
    padding: 20px;
    padding-top: 30px;
  }
  #assistantComponent {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 20px;
    margin-left: 20px;
  }

</style>
