import { createRouter, createWebHistory} from 'vue-router'
//define route component by importing
// import HelloWorld from '../views/HelloWorld.vue'
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
import About_us from '../views/About_us.vue';
import Contact_us from '../views/Contact_us.vue';

import Listing_policy from '../views/Listing_policy.vue';
import Privacy_policy from '../views/Privacy_policy.vue';

import Chat_guide from '../views/Chat_guide.vue';
import Terms_of_use from '../views/Terms_of_use.vue';
import Clankart_teleport_child1 from '../views/clankart_teleport_child1.vue';

import Clankart_teleport from '../views/Clankart._teleport.vue';

import Blog from '../views/Blog.vue';
import How_it_works from '../views/How_it_works_page.vue';
import Feedback from '../views/Feedback.vue';
import View_all from '../views/View_all.vue'
import Post_ab from '../views/Post_ab.vue'
//define routes , each route should map to a component
const routes = [
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/page1',
        name:'page1',
        component: Page1
    },
    {
        path:'/books/view-all',
        name:'view-all',
        component: View_all
    },
    {
        path:'/How_it_works',
        name:'How_it_works',
        component: How_it_works
    },
    {
        path:'/Clankart_teleport',
        name:'Clankart_teleport',
        component: Clankart_teleport
    },
    {
        path:'/Faq`s',
        name:'Clankart_teleport_child1',
        component: Clankart_teleport_child1
    },
    {
        path:'/Chat_guide',
        name:'Chat_guide',
        component: Chat_guide
    },
    {
        path:'/Listing_policy',
        name:'Listing_policy',
        component: Listing_policy
    },
    {
        path:"/Privacy_policy",
        name: "Privacy_policy",
        component: Privacy_policy

    },
    {
        path:'/About_us',
        name:'About_us',
        component: About_us
    },
    {
        path:'/Contact_us',
        name:'Contact_us',
        component: Contact_us
    },
    {
        path:'/Feedback',
        name:'Feedback',
        component: Feedback
    },
    {
        path:'/Blog',
        name:'Blog',
        component: Blog
    },
    {
        path:'/Terms_of_use',
        name:'Terms_of_use',
        component: Terms_of_use
    },
    {
        path: '/post-ad',
        name:'post-ad',
        component: Post_ab
    },
]

//create the router instance and pass the  'router' option
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: routes  //when value is same the i can write only routes;
});


export default router; 