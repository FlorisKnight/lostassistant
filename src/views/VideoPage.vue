<template>
  <div class="videoPage">
    <h1>Lost in assistance</h1>
    <video id="video-active" controls>
      <source src="../files/sampleVideoCats.mp4" type="video/mp4"/>
    </video>
    <p>Playback position: <span id="demo"></span></p>
    <assistant-component id="assistantComponent"></assistant-component>
  </div>
</template>

<script>
import AssistantComponent from '../components/AssistantComponent.vue';
import * as assistantOn from '../variables';

export default {
  name: 'videoPage',
  components: {
    AssistantComponent,
  },
  mounted() {
    const video = document.getElementById('video-active');

    function myFunction() {
      document.getElementById('demo').innerHTML = video.currentTime;
    }

    video.ontimeupdate = function () {
      myFunction();
      if (video.currentTime > 60.2) {
        if (assistantOn.isAssistantOn() === true) {
          assistantOn.updateAssistantOn();
          document.getElementById('assistantComponent').style.visibility = 'hidden';
          console.log('fuck');
        }
      }
    };
  },
};
</script>

<style scoped lang="scss">
  .videoPage{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  video {
    width: 50%;
  }
  #assistantComponent {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 20px;
    margin-left: 20px;
  }
</style>
