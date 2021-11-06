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
  <a :href=nextURLLink 
   class="module-question font-circular">
    <div class="section-text">
      {{ nextURLText }} <img src="assets/btn-cta-white@3x.png" />
    </div>
  </a>
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
  },
  template: template,
};
