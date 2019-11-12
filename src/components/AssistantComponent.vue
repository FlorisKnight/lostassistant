<template>
<div class="assistantComponent">
  <div id="container">
    <div id="assistantIcon">
    </div>
    <div id="textAndNav">
      <p id="assistantOutput">Sample text to animate</p>
      <div id="navigation">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/video">video</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AssistantComponent',
};
</script>

<style scoped lang="scss">
  #container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px;
  }
  #textAndNav {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #assistantIcon {
    border-radius: 50%;
    background: lightblue;
    height: 150px;
    width: 150px;
  }
  #navigation {
    a {
      display: inline-block;
      padding: 5px;
      margin: 5px;
      background-color: black;
      text-decoration: none;
      color: white;
    }
  }
</style>
