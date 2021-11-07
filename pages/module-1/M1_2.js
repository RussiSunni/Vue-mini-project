const template = `
<div class="right">
<div class="banner module1-2">
  <div class="banner-text">
    <div class="title">
      <span class="title-text">What is              
        <span class="title-text">Sustainable               
          <span class="title-text">Investing? 
          </span>
        </span>
      </span>
    </div>
</div>
</div>
<div class="content">

  <div class="section instructions">
    <div class="section-text">
      Watch this short video to find out about what sustainable investing means and how it benefits investors:
    </div> 
  </div>
  <div class="section instructions">
    <div class="section-text">
  <video id="player" playsinline controls data-poster="/path/to/poster.jpg">
    <source src="assets/QP_8vFQyJXg8CrJq_transcoded-63zJzBswpPWDmeyn-861304A0-D11F-4BCD-A8C33227D0859EAA.mp4" type="video/mp4" />
    <!-- <source src="/path/to/video.webm" type="video/webm" /> -->
  
    <!-- Captions are optional -->
    <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
  </video>
</div> 
</div>

  
  
  
</div>
<div class="section module">
<router-link to="/M1-3" class="module-question font-circular" @click="toggleNextPageVisited"> 
  <div class="section-text">
      Proceed to the next section <img src="assets/btn-cta-white@3x.png" />
    </div>
  </router-link>
</div>
</div>`;

export default {
  template: template,
  methods: {
    toggleNextPageVisited() {
      this.$store.commit("M1_3Visited");
    },
  },
};
