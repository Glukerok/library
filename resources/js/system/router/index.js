import Index from '../../pages/index';
import Home from '../../pages/home';

import { createWebHistory, createRouter } from "vue-router";

const index = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home,
                },
            ]
        }
    ],

});

export default index;
