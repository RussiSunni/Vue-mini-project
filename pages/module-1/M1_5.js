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
          <div class="point-number">1</div>
          <div class="point-text">What does ESG stand for? Select ONE answer.</div>
        </div>
      </div>
    </a>
    <img class="image" src="assets/illustrations-mod-1-kc-1.svg">
    <div class="submodule-answers">
      <div class="submodule-answer answer">
        <div class="submodule-answer-box option fadeInOut">
          <div class="section-text">
            Earth, Social and Governance
            <div>
              <button id="button1" onclick="showSubmoduleAnswerFeedback(this, 0)" class="submodule-button" type="button">
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
            'ESG' Stands for Environmental, Social and Governance.
          </div>
        </div>
      </div>
      
      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Environmental, Sustainability and Governance
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
            'ESG' Stands for Environmental, Social and Governance.
          </div>
        </div>
      </div>

      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Environmental, Social and Government
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
            'ESG' Stands for Environmental, Social and Governance.
          </div>
        </div>
      </div>

      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Environmental, Social and Governance
            <div>
              <button id="button4" onclick="showSubmoduleAnswerFeedback(this, 1)" class="submodule-button" type="button">
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
            'ESG' Stands for Environmental, Social and Governance.
          </div>
        </div>
      </div>
    </div>
    <div class="submodule-indicators">
      <div class="submodule-indicator active"></div>
      <div class="submodule-indicator"></div>
      <div class="submodule-indicator"></div>
    </div>
  </div>
  
</div>
<div class="section module" id="module-1">
  <router-link to="/M1-6" class="module-question font-circular"> 
    <div class="section-text">
      Go to question 2 <img src="assets/btn-cta-white@3x.png" />
    </div>
  </router-link>
</div>
</div>

`;

export default {
  template: template,
};
