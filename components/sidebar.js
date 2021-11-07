const template = `
   <div id="left" class="left">
				<div class="search">
					<img class="search-btn" src='assets/button-search-in-text-field@3x.png' />
					<input type="text" />
					<img class="search-btn" src='assets/button-close-in-text-field@3x.png' />
				</div>
				<h3 class="left-title">
					<span class="left-title-text font-circular">UOB-Schroders</span>
						<span class="left-title-text font-circular">Sustainable</span>
							<span class="left-title-text font-circular">Investing</span>
								<span class="left-title-text font-circular">Master Class</span>
				</h3>
				<div class="progress">
					<div class="progress-bar">
						<div style="width: 0%;"></div>
					</div> 
					<div class="progress-text">0% Complete</div>
				</div>
				<div class="checklist">
					<div class="item active">

						<div class="item-content check">
						<router-link to="/"> Welcome to the course!</router-link>
							<img src='assets/button-check-filled@3x.png' />
						</div>
						<div class="subitem">
							<div class="item">
								<div class="item-content check">
								<router-link to="/M1-1" @click="toggleDropdownMenu"> Module 1</router-link>
									<img src='assets/button-check-default@3x.png' />
								</div>							
								<div v-show="dropdownMenuActive" class="dropdown-container">
                                    <div class="subitem">
                                        <div class="item active">
                                            <div class="item-content check">
                                                Introduction
                                                <img src="assets/button-check-filled@3x.png">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-content check">
                                                What is sustainable investing
                                                <img src="assets/button-check-default@3x.png">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-content check">
                                                Why has sustainable investing become so important?
                                                <img src="assets/button-check-default@3x.png">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-content check">
                                                Knowledge check
                                                <img src="assets/button-check-default@3x.png">
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-content check">
                                                Summary
                                                <img src="assets/button-check-default@3x.png">
                                            </div>
                                        </div>
                                    </div>
								</div>
							</div>
							<div class="item">
								<div class="item-content check">
									Module 2
									<img src='assets/button-check-default@3x.png' />
								</div>
							</div>
							<div class="item">
								<div class="item-content check">
									Module 3
									<img src='assets/button-check-default@3x.png' />
								</div>
							</div>
							<div class="item">
								<div class="item-content check">
									Module 4
									<img src='assets/button-check-default@3x.png' />
								</div>
							</div>
							<div class="item">
								<div class="item-content check">
									Module 5
									<img src='assets/button-check-default@3x.png' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    `;

export default {
  data() {
    return {
      dropdownMenuActive: false,
    };
  },
  template: template,
  methods: {
    toggleDropdownMenu() {
      this.dropdownMenuActive = !this.dropdownMenuActive;
    },
  },
};
