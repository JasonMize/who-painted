import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import ArtModule from '../art/art.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    uiRouter,
    angularCookies,
    ArtModule.name,
])
    .component('app', appComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('index', {
            url: '/',
            resolve: {
                art(artAPIService) {
                    return artAPIService.getAllArt();
                },
            },
            component: 'artList',
        }).state('art', {
            url: '/art/{artId}',
            resolve: {
                art(artAPIService, $stateParams) {
                    return artAPIService
                        .getArt($stateParams.artId);
                },
            },
            component: 'artDetail',
        });
    })
    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API

        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;

