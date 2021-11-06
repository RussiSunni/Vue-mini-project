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
          <div class="point-number">3</div>
          <div class="point-text">The following are reasons why should investors consider impact risk EXCEPT:</div>
        </div>
      </div>
    </a>
    <img class="image" src="assets/illustrations-kc-mod-1-qn-2.svg">
    <div class="submodule-answers">
      <div class="submodule-answer answer">
        <div class="submodule-answer-box option fadeInOut">
          <div class="section-text">
            Considering impact risk, alongside risk and return, is crucial for investors to uncover a company’s real investment potential
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
            Companies and their operations have ripple effects on the economies and societies surrounding them. Therefore, accessing a company’s impact risk will be crucial in understanding its long-term value for investors. 
          </div>
        </div>
      </div>
      
      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            The impact that companies have on people and the planet are increasingly being translated into financial costs
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
            Companies and their operations have ripple effects on the economies and societies surrounding them. Therefore, accessing a company’s impact risk will be crucial in understanding its long-term value for investors.   
          </div>
        </div>
      </div>

      <div class="submodule-answer answer">
        <div class="submodule-answer-box option">
          <div class="section-text">
            Taking impact risk into account means that investors will need to sacrifice investment returns
            <div>
              <button id="button3" onclick="showSubmoduleAnswerFeedback(this, 1)" class="submodule-button" type="button">
                Select
              </button>
            </div>
          </div>
        </div>
        <div id="correct" class="submodule-answer-box feedback correct fadeInOut hidden">
          <div class="result">
            Correct!
          </div>
          <div class="section-text">
            On the contrary, assessing a company’s impact risk is crucial in understanding it’s long-term value and can potentially help enhance investment returns.
          </div>
        </div>
      </div>

    </div>
    <div class="submodule-indicators">
      <div class="submodule-indicator"></div>
      <div class="submodule-indicator"></div>
      <div class="submodule-indicator active"></div>
    </div>
  </div>
  
</div>
<div class="section module" id="module-1">
<router-link to="/M1-7" class="module-question font-circular"> 
  <div class="section-text">
      Your score <img src="assets/btn-cta-white@3x.png" />
    </div>
  </router-link>
</div>
</div>


`;

export default {
  template: template,
};
