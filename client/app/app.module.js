import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import ScreenshotsModule from '../art/art.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    uiRouter,
    angularCookies,
    ScreenshotsModule.name,
])
    .component('app', appComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('index', {
            url: '/',
            resolve: {
                screenshots(screenshotsService) {
                    return screenshotsService.getAllScreenshots();
                },
            },
            component: 'screenshotsList',
        }).state('screenshot', {
            url: '/screenshot/{screenshotId}',
            resolve: {
                screenshot(screenshotsService, $stateParams) {
                    return screenshotsService
                        .getScreenshot($stateParams.screenshotId);
                },
            },
            component: 'screenshotsDetail',
        });
    })
    .run(($http, $cookies) => {
        // Add a header for CSRF token, so that POST does not fail to our API

        // eslint-disable-next-line no-param-reassign
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    });

export default AppModule;

