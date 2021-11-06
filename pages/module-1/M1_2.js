const template = `
<div class="right">
  <div class="banner module1-1">
    <div class="banner-text">
      <div class="title">
        <span class="title-text"
          >Module 1:
          <span class="title-text"
            >What Sustainable
            <span class="title-text">Investing Means </span>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="section welcome">
      <div class="section-title">Introduction</div>
      <div class="section-text">
        People are increasingly conscious about making sustainable choices –
        from where we shop, to the food we eat, and our travel habits. These
        principles have started to play out in investment decisions as well.
      </div>
    </div>
    <div class="section instructions">
      <div class="section-text">
        The Schroders Global Investor Study 2020 surveyed more than 23,000
        investors from 32 locations around the world and found that 77% of
        investors today refuse to compromise on their personal beliefs when
        investing, even if higher returns were on offer.
      </div>
    </div>
    <div class="section instructions">
      <div class="section-text">
        But before we dive into the essentials of sustainable investing, let’s
        answer a few questions:
      </div>
    </div>

    <div class="module-answers">
      <div class="module-answer answer">
        <div class="module-answer-box option fadeInOut">
          <div class="option-number">1</div>
          <div class="image">
            <img src="assets/illustrations-mod-1-qn-1.svg" />
          </div>
          <div class="section-text">
            Sustainable investing is only about protecting the environment
            <div class="module-buttons-wrapper">
              <button
                onclick="showModuleAnswerFeedback(this)"
                class="submodule-button"
                type="button"
                value="false"
              >
                Yes
              </button>
              <button
                onclick="showModuleAnswerFeedback(this)"
                class="submodule-button"
                type="button"
                value="true"
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div class="module-answer-box feedback correct fadeInOut hidden">
          <div class="result">Correct!</div>
          <div class="section-text">
            The 'E' of 'ESG' is indeed environment, but social 'S' and
            governance 'G' factors are also fundamental to sustainable
            investing.
          </div>
        </div>
        <div class="module-answer-box feedback incorrect fadeInOut hidden">
          <div class="result">Incorrect!</div>
          <div class="section-text">
            The 'E' of 'ESG' is indeed environment, but social 'S' and
            governance 'G' factors are also fundamental to sustainable
            investing.
          </div>
        </div>
      </div>

      <div class="module-answer answer">
        <div class="module-answer-box option fadeInOut">
          <div class="option-number">2</div>
          <div class="image">
            <img src="assets/illustrations-mod-1-qn-2.svg" />
          </div>
          <div class="section-text">
            Sustainable investing is not the same as ethical investing
            <div class="module-buttons-wrapper">
              <button
                onclick="showModuleAnswerFeedback(this)"
                class="submodule-button"
                type="button"
                value="true"
              >
                Yes
              </button>
              <button
                onclick="showModuleAnswerFeedback(this)"
                class="submodule-button"
                type="button"
                value="false"
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div class="module-answer-box feedback correct fadeInOut hidden">
          <div class="result">Correct!</div>
          <div class="section-text">
            A big part of sustainable investing is enganging with companies in
            order to protect and enhance the value of investments, not just
            excluding ethically dubious sectors.
          </div>
        </div>
        <div class="module-answer-box feedback incorrect fadeInOut hidden">
          <div class="result">Incorrect!</div>
          <div class="section-text">
            A big part of sustainable investing is enganging with companies in
            order to protect and enhance the value of investments, not just
            excluding ethically dubious sectors.
          </div>
        </div>
      </div>

      <div class="module-answer answer">
        <div class="module-answer-box option fadeInOut">
          <div class="option-number">3</div>
          <div class="image">
            <img src="assets/illustrations-mod-1-qn-3.svg" />
          </div>
          <div class="section-text">
            Sustainable investing means having to sacrifice on returns
            <div class="module-buttons-wrapper">
              <button
                onclick="showModuleAnswerFeedback(this)"
                class="submodule-button"
                type="button"
                value="false"
              >
                Yes
              </button>
              <button
                onclick="showModuleAnswerFeedback(this)"
                class="submodule-button"
                type="button"
                value="true"
              >
                No
              </button>
            </div>
          </div>
        </div>
        <div class="module-answer-box feedback correct fadeInOut hidden">
          <div class="result">Correct!</div>
          <div class="section-text">
            Companies that consider ESG issues can increase returns and / or
            reduce risks compared to those that don't. An increasing amount of
            financial research backs this up<sup>1</sup>.

            <div class="reference">
              <sup>1</sup>Source: Journal of Sustainable Finance and Investment,
              Morningstar Financial Research, 2020.
            </div>
          </div>
        </div>
        <div class="module-answer-box feedback incorrect fadeInOut hidden">
          <div class="result">Incorrect!</div>
          <div class="section-text">
            Companies that consider ESG issues can increase returns and / or
            reduce risks compared to those that don't. An increasing amount of
            financial research backs this up<sup>1</sup>.

            <div class="reference">
              <sup>1</sup>Source: Journal of Sustainable Finance and Investment,
              Morningstar Financial Research, 2020.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section module">
    <a href="module01-02.html" class="module-question font-circular">
      <div class="section-text">
        Proceed to the next section <img src="assets/btn-cta-white@3x.png" />
      </div>
    </a>
  </div>
</div>`;

export default {
  template: template,
};
