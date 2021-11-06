Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

Vue.component("top", {
  template: `
    <div id="header" class="header font-circular">
			<span class="logo-center-helper"></span>
			<button class="openbtn" onclick="openNav()">☰</button>
			<a href='index.html'><img class="logo-img" src="assets/schroders-logo-white-solo.svg" /></a>
	  	</div>
    </head> 
    `,
});

Vue.component("sidebar", {
  template: `
   <div id="left" class="left">
				<!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> -->
				<div class="search">
					<img class="search-btn" src='assets/button-search-in-text-field@3x.png' />
					<input type="text" />
					<img class="search-btn" src='assets/button-close-in-text-field@3x.png' />
				</div>
				<h3 class="left-title">
					<span class="left-title-text font-circular">UOB-Schroders
						<span class="left-title-text font-circular">Sustainable
							<span class="left-title-text font-circular">Investing
								<span class="left-title-text font-circular">Master Class
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
							Welcome to the course!
							<img src='assets/button-check-filled@3x.png' />
						</div>
						<div class="subitem">
							<div class="item">
								<div class="item-content check">
									Module 1
									<img src='assets/button-check-default@3x.png' />
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
    `,
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
