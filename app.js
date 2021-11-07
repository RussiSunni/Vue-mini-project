import sidebar from "./components/sidebar.js";
import index from "./pages/index.js";
import M1_1 from "./pages/module-1/M1_1.js";
import M1_2 from "./pages/module-1/M1_2.js";
import M1_3 from "./pages/module-1/M1_3.js";
import M1_4 from "./pages/module-1/M1_4.js";
import M1_5 from "./pages/module-1/M1_5.js";
import M1_6 from "./pages/module-1/M1_6.js";
import M1_7 from "./pages/module-1/M1_7.js";
import M1_8 from "./pages/module-1/M1_8.js";

const routes = [
  { path: "/", component: index },
  { path: "/M1-1", component: M1_1 },
  { path: "/M1-2", component: M1_2 },
  { path: "/M1-3", component: M1_3 },
  { path: "/M1-4", component: M1_4 },
  { path: "/M1-5", component: M1_5 },
  { path: "/M1-6", component: M1_6 },
  { path: "/M1-7", component: M1_7 },
  { path: "/M1-8", component: M1_8 },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0, behavior: "smooth" };
  },
});

const store = new Vuex.Store({
  state: {
    m1_1: false,
    m1_2: false,
    m1_3: false,
    m1_4: false,
    m1_8: false,
    m1: false,
  },
  mutations: {
    M1_1Visited(state) {
      state.m1_1 = true;
    },
    M1_2Visited(state) {
      state.m1_2 = true;
    },
    M1_3Visited(state) {
      state.m1_3 = true;
    },
    M1_4Visited(state) {
      state.m1_4 = true;
    },
    M1_8Visited(state) {
      state.m1_8 = true;
      state.m1 = true;
    },
  },
});

const app = Vue.createApp({});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.use(store);

app.component("sidebar", sidebar);

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

app.mount("#app");
