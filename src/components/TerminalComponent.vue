<template>
<div class="terminalComponent">
  <div id="terminalContainer">
    <a href="javascript:void(0)" id="btnCloseTerminal" >&times;</a>
    <input id="terminalText"/>
    <p>Use cd {page} to navigate the website</p>
    <p>Hacky things</p>
    <p>More text</p>
    <p>Bla bla bla bla</p>
  </div>
  <div id="hiddenRouting">
    <router-link to="/" id="homeRoute">home</router-link>
    <router-link to="/about" id="aboutRoute">about</router-link>
    <router-link to="/video" id="videoRoute">video</router-link>
    <router-link to="/why" id="whyRoute">video</router-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'Terminal',
  mounted() {
    const input = document.getElementById('terminalText');
    input.addEventListener('keyup', (event) => {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();

        switch (input.value) {
          default:
            break;
          case 'cd home':
            document.getElementById('homeRoute').click();
            break;
          case 'cd about':
            document.getElementById('aboutRoute').click();
            break;
          case 'cd video':
            document.getElementById('videoRoute').click();
            break;
          case 'cd why':
            document.getElementById('whyRoute').click();
            break;
        }
      }
    });
  },
};
</script>

<style scoped lang="scss">
  #hiddenRouting {
    display: none;
  }
#terminalContainer{
  width: 100%;
  height: 100vh;
  background: black;
  p {
    color: lime;
  }
  #terminalText {
    background: black;
    color: lime;
    width: 100%;
    border: none;
  }
  #btnCloseTerminal {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 60px;
  }

  a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover, .overlay a:focus {
    color: #f1f1f1;
  }
}
</style>
