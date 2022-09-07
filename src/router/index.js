import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/pages/home.vue'
import properties from '../views/pages/proparties.vue'
import listproperties from '../views/pages/listproperty.vue'
import aboutus from "../views/pages/aboutus.vue"
import career from '../views/pages/career.vue'
import contact from "../views/pages/contact.vue"

const routes = [{

        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/properties',
        name: 'properties',
        component: properties
    },

    {
        path: '/list/properties',
        name: 'listProperties',
        component: listproperties
    },

    {
        path: '/about/us',
        name: 'about_us',
        component: aboutus
    },

    {
        path: '/career',
        name: 'career',
        component: career
    },

    {
        path: '/contact',
        name: 'contact',
        component: contact
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router