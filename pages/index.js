const template = `
    <div id="right" class="right">
        <div class="banner intro">
            <div class="banner-text">
                <div class="title">
                    <span class="title-text">Schroders
                        <span class="title-text">Sustainable
                            <span class="title-text">Investing
                                <span class="title-text">Master Class
                                    <div class="subtitle">
                                        Tackle the essentials of sustainable investing with our
                                        easy-to-understand educational content
                                        to help you better understand your options and their impact in less than
                                        45 minutes.
                                    </div>
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="section welcome">
                <div class="section-title">
                    Welcome to the course! here's what you need to know.
                </div>
                <div class="section-text">
                    This course consists of 5 short modules that will cover the essentials of sustainable
                    investing. A minimum
                    score is 67% in the 'Knowledge Check' section at the end of each module is required to
                    complete the
                    course.
                </div>
            </div>
            <div class="section tips">
                <div class="section-title">
                    A few tips to make the learning process even more effective
                </div>
                <div class="tips-boxes font-circular">
                    <div class="card">
                        <img src='assets/illustrations-tips-1@3x.png' />
                        <p>&nbsp;</p>
                        <div class="section-text">
                            Work through the course consistently:<br />
                            dont skip modules
                        </div>
                    </div>

                    <div class="card">
                        <img src='assets/illustrations-tips-2@3x.png' />
                        <p>&nbsp;</p>
                        <div class="section-text">
                            Take your time:<br />
                            learning is a demanding task
                        </div>
                    </div>

                    <div class="card">
                        <img src='assets/illustrations-tips-3@3x.png' />
                        <p>&nbsp;</p>
                        <div class="section-text">
                            Takes notes:<br />
                            this will help you retain information
                        </div>
                    </div>
                </div>
            </div>

            <div class="section instructions">
                <div class="section-title font-circular">
                    Instructions
                </div>
                <div class="section-text">
                    When navigating through this course, please keep these points in mind: <br /></br />
                    <div class="point">
                        <div class="point-number">1</div>
                        <div class="point-text">In order to complete a module, you will need to answer all
                            questions within the
                            module. When you are done, scroll to the bottom of the page where a button
                            indicating the next module
                            will become visible.</div>
                    </div>
                    <div class="point">
                        <div class="point-number">2</div>
                        <div class="point-text">Course content is searchable. Use the search field in the upper
                            left corner of
                            your screen.</div>
                    </div>
                    <div class="point">
                        <div class="point-number">3</div>
                        <div class="point-text">There is a 'Knowledge Check' section at the end of each module
                            where you will
                            need a score of at least 2 out of 3 correct answers (67%) to complete this course
                            successfully.</div>
                    </div>
                    <div class="point">
                        <div class="point-number">4</div>
                        <div class="point-text">Have fun!</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section module">
            <router-link to="/M1-1" class="module-question font-circular" @click="toggleNextPageVisited"> 
                <div class="section-text">
                    Module 1: What sustainable investing means <img src="assets/btn-cta-white@3x.png" />
                </div>
            </router-link>
        </div>
        
    </div>
    
`;
export default {
  template: template,
  methods: {
    toggleNextPageVisited() {
      this.$store.commit("M1_1Visited");
    },
  },
};
