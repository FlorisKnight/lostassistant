<template>
  <div id="app">
    <terminal-component id="terminalComponent"></terminal-component>
    <i style="font-size:30px;cursor:pointer" id="btnOpenTerminal" class="fa fa-circle "></i>
    <router-view/>
  </div>
</template>

<script>
import TerminalComponent from '@/components/TerminalComponent.vue';

export default {
  components: {
    TerminalComponent,
  },
};

window.onload = function () {
  const btnOpenTerminal = document.getElementById('btnOpenTerminal');
  btnOpenTerminal.onclick = function () {
    document.getElementById('terminalComponent').style.height = '100%';
    document.getElementById('terminalText').focus();
  };

  const btnCloseTerminal = document.getElementById('btnCloseTerminal');
  btnCloseTerminal.onclick = function () {
    document.getElementById('terminalComponent').style.height = '0%';
    document.getElementById('terminalText').blur();
  };

  const input = document.getElementById('terminalText');

  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      switch (input.value) {
        default:
          break;
        case 'cd home':
          break;
        case 'cd about':
          break;
        case 'cd why':
          break;
        case 'cd video':
          break;
      }
    }
  });
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  #terminalComponent {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.9);
    overflow-y: hidden;
    transition: 0.5s;
    router-link {
      display: none;
    }
  }
  #btnOpenTerminal {
    position: fixed;
    right: 10px;
    top: 10px;
    color: lightgray;
  }
</style>
