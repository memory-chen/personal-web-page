import Content from '../components/Content/Content.vue'
import Paper from '../components/Paper/Paper.vue'
import Contact from '../components/Contact/Contact.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
const routes = [{
	path: '/paper',
	component: Paper
}, {
	path: '/contact',
	component: Contact
},, {
	path: '/portfolio',
	component: Portfolio
}, { path: '*', redirect: '/paper' }
];

export default routes