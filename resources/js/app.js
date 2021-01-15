/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';  

Vue.component('usuarios', require('./components/users.vue').default);

const app = new Vue({
    el: '#app',
});
