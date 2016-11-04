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

        $stateProvider
            .state('index', {
                url: '/',
                component: 'artStaging',
            })

            .state('artPage', {
                url: '/art',
                component: 'artPage',
            })

            .state('artSignupInvite', {
                url: '/invite',
                component: 'artSignupInvite',
            })

            .state('artStaging', {
                url: '/staging',
                component: 'artStaging',
            })

            .state('artLevels', {
                url: '/levels/{artpackId}',
                component: 'artLevels',
                resolve: {
                    // for filtering of levels to specific artpack
                    artpackId(artAPIService, $stateParams) {
                        return artAPIService
                            .getArtPackArtwork($stateParams.artworkId);
                    },
                },
            })

            .state('artLesson', {
                url: '/lesson/{levelId}',
                component: 'artLesson',
                resolve: {
                    levelId(artAPIService, $stateParams) {
                        return artAPIService
                            .getArtPackLevel($stateParams.levelId);
                    },
                },
            });
    })

    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API
        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;

