import React from 'react';
import {SiReact, SiEmberDotJs, SiAngular, SiVueDotJs} from 'react-icons/si'

 const reposData = [
     {
        name: "ReactJS",
        path: "/reactjs",
        github_url: "https://api.github.com/repos/facebook/react",
        icon: <SiReact/>,
        logo: "react_logo.png"
     },
     {
        name: "EmberJS",
        path: "/emberjs",
        github_url: "https://api.github.com/repos/emberjs/ember.js",
        icon: <SiEmberDotJs/>,
        logo: "ember_logo.png"
     },
     {
        name: "AngularJS",
        path: "/angularjs",
        github_url: "https://api.github.com/repos/angular/angular.js",
        icon: <SiAngular/>,
        logo: "angular_logo.png"
     },
     {
        name: "VueJS",
        path: "/vuejs",
        github_url: "https://api.github.com/repos/vuejs/vue",
        icon: <SiVueDotJs/>,
        logo: "vue_logo.png"
     },

 ]
export default reposData

