import React from 'react';
import {SiReact, SiEmberDotJs, SiAngular, SiVueDotJs} from 'react-icons/si'
const repos = [
    {
        name: "ReactJS",
        path: "/reactjs",
        github_url: "https://api.github.com/facebook/react/",
        icon: <SiReact/>,
    },
    {
        name: "EmberJS",
        path: "/emberjs",
        github_url: "https://api.github.com/emberjs/ember.js/",
        icon: <SiEmberDotJs/>,
    },
    {
        name: "AngularJS",
        path: "/angularjs",
        github_url: "https://api.github.com/angular/angular.js/",
        icon: <SiAngular/>,
    },
    {
        name: "VueJS",
        path: "/vuejs",
        github_url: "https://api.github.com/vuejs/vue/",
        icon: <SiVueDotJs/>,
    },
]

export default repos;
