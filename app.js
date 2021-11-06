import M1_1 from "./pages/module-1/M1_1.js";
import M1_2 from "./pages/module-1/M1_2.js";

const routes = [
  { path: "/", component: M1_1 },
  { path: "/M1-2", component: M1_2 },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.component("top", {
  template: `
    <div id="header" class="header font-circular">
			<span class="logo-center-helper"></span>
			<button class="openbtn" onclick="openNav()">☰</button>
			<a href='index.html'><img class="logo-img" src="assets/schroders-logo-white-solo.svg" /></a>
	  	</div>
    </head>
    `,
});

app.component("sidebar", {
  template: `
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

app.mount("#app");

// Now the app has started!
