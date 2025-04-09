import { createRouter, createWebHistory} from 'vue-router'
//define route component by importing
// import HelloWorld from '../views/HelloWorld.vue'
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
// import About_us from '../views/About_us.vue';
// import Contact_us from '../views/Contact_us.vue';

// import Listing_policy from '../views/Listing_policy.vue';
// import Privacy_policy from '../views/Privacy_policy.vue';

// import Chat_guide from '../views/Chat_guide.vue';
// import Terms_of_use from '../views/Terms_of_use.vue';
// import Clankart_teleport_child1 from '../views/clankart_teleport_child1.vue';

// import Clankart_teleport from '../views/Clankart._teleport.vue';

// import Blog from '../views/Blog.vue';
// import How_it_works_page from '../views/How_it_works_page.vue';
// import Feedback from '../views/Feedback.vue';
import Page2 from '../views/Page2.vue'

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
        path:'/page2',
        name:'page2',
        component: Page2
    },
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/',
        name:'home',
        component: Home
    },
]

//create the router instance and pass the  'router' option
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: routes  //when value is same the i can write only routes;
});


export default router; 