// Import des fonctions de routeur avec vue-routeur
import { createRouter, createWebHistory } from "vue-router";

import LoginVue from "../pages/login.vue";
import HomeVue from "../pages/home.vue";

const routes = [
    { path: "/login", component: LoginVue },
    { path: "/signup", component: LoginVue },
    { path: "/home", component: HomeVue },
    { path: "/", redirect: "/login" }

]

const router = createRouter({ history: createWebHistory(), routes });


router.beforeEach((to, from) => {
    if (needConnect(to)) {
    return router.push("/login")
    }
})
function needConnect(to) {
    if (!privatePage(to)) return false
    if (!tokenInStorage()) return true
    return false
}

function privatePage(to) {
    const publicPage = ["/login","/signup"]
    return !publicPage.includes(to.path)
}

function tokenInStorage() {
    return localStorage.getItem("token") != null
}

export { router }