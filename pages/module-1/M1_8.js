const template = `
<div class="right">
<div class="banner module1-4">
  <div class="banner-text">
    <div class="title">
      <span class="title-text">KNOWLEDGE
        <span class="title-text">CHECK
          
        </span>
      </span>
    </div>
  </div>
</div>
<div class="content">

  <div class="section instructions">
    <div class="section-text">
      
    </div>
  </div>

  <!-- <div class="section score" id="score">
    <div class="score-wrapper">
      <div class="score-detail">
        <div class="your-score">Your score</div>
        <div class="score-percentage-33">33%</div>
      </div>
      <img src="assets/illustrations-kc-score-bgd-image-33.svg">
    </div>
  </div> -->

  <div id="app">          
    <div class="section score" id="score">
      <div class="score-wrapper">
        <div class="score-detail">
          <div class="your-score">Your score</div>
          <div v-bind:class=scoreClass>{{resultScore}}%</div> 
        </div>
        <img :src=resultImgURL>
      </div>
    </div>
  </div>
  
</div>
<div class="section module"> 
  <router-link v-if="passed" to="/M1-9" class="module-question font-circular" @click="resetScore"> 
    <div class="section-text">
      {{ nextURLText }} <img src="assets/btn-cta-white@3x.png" /> 
    </div>
  </router-link>
  <router-link v-else to="/M1-5" class="module-question font-circular" @click="resetScore"> 
    <div class="section-text">
      {{ nextURLText }} <img src="assets/btn-cta-white@3x.png" /> 
    </div>
  </router-link>
</div>
</div>

`;

export default {
  computed: {
    resultScore() {
      var result = "";
      var score = localStorage.getItem("score");
      if (score == 0) result = "0";
      else if (score == 1) result = "33";
      else if (score == 2) result = "67";
      else result = "100";

      return result;
    },

    scoreClass() {
      var result = "";
      var score = localStorage.getItem("score");
      if (score < 2) result = "score-percentage-33";
      else result = "score-percentage";

      return result;
    },

    resultImgURL() {
      var score = localStorage.getItem("score");
      var imgSrc = "";
      if (score < 2) imgSrc = "assets/illustrations-kc-score-bgd-image-33.svg";
      else if (score == 2)
        imgSrc = "assets/illustrations-kc-score-bgd-image-67.svg";
      else imgSrc = "assets/illustrations-kc-score-bgd-image-100.svg";

      return imgSrc;
    },

    nextURLText() {
      var result = "";
      var score = localStorage.getItem("score");
      if (score < 2) result = "Take again";
      else if (score == 2) result = "Go to summary";
      else result = "Go to summary";

      return result;
    },

    passed() {
      var score = localStorage.getItem("score");
      if (score < 2) return false;
      else return true;
    },
  },
  template: template,
  methods: {
    resetScore() {
      score = localStorage.getItem("score");
      score = 0;
      localStorage.setItem("score", score);
    },
  },
};
