import Home from './views/Home.vue';
import Component from './views/Component.vue';
import About from './views/About.vue';

/* 
	"param" /:verdi
*/

// prettier-ignore

export default [
	/* { name: 'pages-dynamic', path: '/:blabla/:lorem', component: Page } 
	{ name: 'page-dynamic', path: '/:blabla', component: Page }, */
	{ name: 'about', path: '/about', component: About },
	{ name: 'component', path: '/:component_id', component: Component },
	{ name: 'home', path: '/', component: Home },
	// { name: 'not-found' }
]