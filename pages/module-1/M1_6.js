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
      <p>Answer at least 2 out of 3 correct answers (67%) to complete this module.</p> 
    </div>
  </div>

  <div class="section submodule" id="submodule-1-1">
    <a href="#submodule-1-1" class="submodule-question font-circular">
      <div class="section-text">
        <div class="point">
          <div class="point-number">2</div>
          <div class="point-text">What is sustainable investing? Select ONE answer.</div>
        </div>
      </div>
    </a>
    <img class="image" src="assets/illustrations-kc-mod-1-qn-2.svg">
    <div class="submodule-answers">
      <div class="submodule-answer answer">
        <div class="submodule-answer-box option fadeInOut">
          <div class="section-text">
            Sustainable investing is recognising that companies who pursue good ESG practices are more likely to achieve better financial results over time
            <div>
              <button id="button1" onclick="showSubmoduleAnswerFeedback(this, 1)" class="submodule-button" type="button">
                Select
              </button>
            </div>
          </div>
        </div>
        <div class="submodule-answer-box feedback correct fadeInOut hidden">
          <div class="result">
            Correct!
          </div>
          <div class="section-text">
            Companies that pursue good ESG practices are also more likely to yield the best results for their investors.
          </div>
        </div>
      </div>
      
      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Sustainable investing is all about an investor’s values, not good performance
            <div>
              <button id="button2" onclick="showSubmoduleAnswerFeedback(this, 0)" class="submodule-button" type="button">
                Select
              </button>
            </div>
          </div>
        </div>
        <div class="submodule-answer-box feedback incorrect fadeInOut hidden">
          <div class="result">
            Incorrect!
          </div>
          <div class="section-text">
            Companies that consider ESG factors are likely to grow faster, benefit from more incentives, and enjoy greater consumer support, which translates to better long-term performance for investors.
          </div>
        </div>
      </div>

      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Sustainable investing is a short-term fad popular amongst investors today
            <div>
              <button id="button3" onclick="showSubmoduleAnswerFeedback(this, 0)" class="submodule-button" type="button">
                Select
              </button>
            </div>
          </div>
        </div>
        <div class="submodule-answer-box feedback incorrect fadeInOut hidden">
          <div class="result">
            Incorrect!
          </div>
          <div class="section-text">
            Sustainability is not a passing trend. It’s vital for companies with an eye on the future to consider, and it’s a must for investors looking for resilient, high-performing long-term investments.
          </div>
        </div>
      </div>

      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Sustainable investing is only about excluding ethically dubious sectors
            <div>
              <button id="button4" onclick="showSubmoduleAnswerFeedback(this, 0)" class="submodule-button" type="button">
                Select
              </button>
            </div>
          </div>
        </div>
        <div class="submodule-answer-box feedback incorrect fadeInOut hidden">
          <div class="result">
            Incorrect!
          </div>
          <div class="section-text">
            Exclusion is only one possible strategy. Sustainable investing is a broad investment approach that is considered at all stages of the investment process.
          </div>
        </div>
      </div>
    </div>
    <div class="submodule-indicators">
      <div class="submodule-indicator"></div>
      <div class="submodule-indicator active"></div>
      <div class="submodule-indicator"></div>
    </div>
  </div>
  
</div>
<div class="section module" id="module-1">
  <router-link to="/M1-7" class="module-question font-circular"> 
    <div class="section-text">
      Go to question 3 <img src="assets/btn-cta-white@3x.png" />
    </div>
  </router-link>
</div>
</div>

`;

export default {
  template: template,
};
