<template>
  <div id="app">
    <Background/>
    <div class="login-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Background from '@/components/Background'
export default {
  name: 'App',
  components: {Background}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

.login-main{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  height: 600px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
