<template>
  <div id="app">
    <div class="random-box">
      <div class="random-card random-card--1"></div>
      <div class="random-card random-card--2"></div>
      <div class="random-card random-card--3"></div>

      <div class="random-card random-card--main">
        <div v-show="!loading">{{ idea }}</div>

        <div class="ph-item" style="width: 100%;border:0;" v-show="loading">
          <div class="ph-col-12">
            <div class="ph-row">
              <div class="ph-col-12 big empty"></div>
              <div class="ph-col-12 big"></div>
              <div class="ph-col-2 big empty"></div>
              <div class="ph-col-8 big"></div>
            </div>
          </div>
        </div>
      </div>

      <span class="idea-number" :data-loading="loading">#{{ idea_number }}</span>

      <div>
        <button class="btn" @click="giveMeAIdea">gerar outra ideia</button>
      </div>
    </div>

    <footer class="footer">
      Claramente inspirado em <a href="http://jotateles.com.br/awesome-ideas/">awesome ideas</a>
    </footer>
  </div>
</template>

<script>
import random from 'just-random'

export default {
  name: 'app',
  data () {
    return {
      loading: true,
      idea_number: 0,
      idea: '',
    }
  },
  methods: {
    giveMeAIdea (i = false) {
      this.loading = true
      this.idea_number = ''

      if (i) i--

      const idea = i ? this.ideas[i] : random(this.ideas)

      window.setTimeout(() => {
        this.idea_number = this.ideas.indexOf(idea) + 1
        window.location.hash = this.idea_number
        this.idea = idea
        this.loading = false
      }, 500)

    }
  },
  computed: {
    ideas () {
      return window.awesome_ideas
    }
  },
  mounted () {
    const hash = window.location.hash.replace('#', '')

    this.giveMeAIdea(hash)
  }

}
</script>

<style>
/**
 * placeholder-loading v0.1.4
 * Author: Zalog (http://www.zalog.ro/)
 * License: MIT
 **/
.ph-item{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:30px 15px 15px;overflow:hidden;margin-bottom:30px;background-color:#fff;border:1px solid #e6e6e6;border-radius:2px}.ph-item,.ph-item *,.ph-item :after,.ph-item :before{-webkit-box-sizing:border-box;box-sizing:border-box}.ph-item:before{content:" ";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:a .8s linear infinite;animation:a .8s linear infinite;background:-webkit-gradient(linear,left top,right top,color-stop(46%,hsla(0,0%,100%,0)),color-stop(50%,hsla(0,0%,100%,.35)),color-stop(54%,hsla(0,0%,100%,0))) 50% 50%;background:linear-gradient(90deg,hsla(0,0%,100%,0) 46%,hsla(0,0%,100%,.35) 50%,hsla(0,0%,100%,0) 54%) 50% 50%}.ph-item>*{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;padding-right:15px;padding-left:15px}.ph-item>*,.ph-row{display:-webkit-box;display:-ms-flexbox;display:flex}.ph-row{-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:7.5px}.ph-row div{height:10px;margin-bottom:7.5px;background-color:#ced4da}.ph-row .big,.ph-row.big div{height:20px;margin-bottom:15px}.ph-row .empty{background-color:hsla(0,0%,100%,0)}.ph-col-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%}.ph-col-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%}.ph-col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%}.ph-col-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%}.ph-col-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%}.ph-col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%}.ph-avatar{position:relative;width:100%;min-width:60px;background-color:#ced4da;margin-bottom:15px;border-radius:50%;overflow:hidden}.ph-avatar:before{content:" ";display:block;padding-top:100%}.ph-picture{width:100%;height:120px;background-color:#ced4da;margin-bottom:15px}@-webkit-keyframes a{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}to{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes a{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}to{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}
</style>


<style>
body {
  background-color: #DFDBE5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

::-moz-selection { /* Code for Firefox */
    color: white;
    background: #9F44D3;
}

::selection {
    color: white;
    background: #9F44D3;
}

.btn {
  background-image: linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%);
  border: 0;
  border-radius: 100px;
  padding: 20px 40px;
  background-size: 100%;
  transition: background-size ease-in-out .4s, box-shadow ease-in-out .2s;
  outline: none;
  margin-top: 20px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0px 6px 7px rgba(168, 83, 217, 0.30);
}

.btn:hover {
  background-size: 120%;
}

.btn:active {
  background-size: 120%;
  box-shadow: 0px 2px 7px rgba(168, 83, 217, 0.30);
}

.random-box {
  position: relative;
  max-width: 600px;
  width: 80%;
  height: 200px;
}

.random-card {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0px -1px 13px rgba(0, 0, 0, 0.13);
  background-color: white;
  border-radius: 6px;
  padding: 15px 40px;
}

.random-card--1 {
  top: -30px;
  left:  15px;
  right: 15px;
  opacity: .4;
}

.random-card--2 {
  top: -20px;
  left:  10px;
  right: 10px;
  opacity: .6;
}

.random-card--3 {
  top: -10px;
  left:  5px;
  right: 5px;
  opacity: .8;
}

.random-card--main {
  display: flex;
  position: relative;
  min-height: 100%;
  font-family: 'Volkhov', serif;
  color: #676767;
  line-height: 1.5;
  align-items: center;
  justify-content: center;
}

.idea-number {
  position: absolute;
  top:  10px;
  left: 10px;
  font-weight: bold;
  color: #c6c1d1;
}

.idea-number[data-loading] {
  color: #ced4da;
  background: #ced4da;
  width: 60px;
  z-index: 200;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.footer {
  position: fixed;
  bottom: 15px;
  color: #6c5a94;
  background-color: rgba(223, 219, 229, 0.57);
}

</style>
