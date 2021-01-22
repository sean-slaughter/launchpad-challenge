import React from 'react';
import {SiReact, SiEmberDotJs, SiAngular, SiVueDotJs} from 'react-icons/si'

 const reposData = [
     {
        name: "ReactJS",
        path: "/reactjs",
        github_url: "https://api.github.com/repos/facebook/react",
        icon: <SiReact/>,
     },
     {
        name: "EmberJS",
        path: "/emberjs",
        github_url: "https://api.github.com/repos/emberjs/ember.js",
        icon: <SiEmberDotJs/>,
     },
     {
        name: "AngularJS",
        path: "/angularjs",
        github_url: "https://api.github.com/repos/angular/angular.js",
        icon: <SiAngular/>,
     },
     {
        name: "VueJS",
        path: "/vuejs",
        github_url: "https://api.github.com/repos/vuejs/vue",
        icon: <SiVueDotJs/>,
     },

 ]
export default reposData

