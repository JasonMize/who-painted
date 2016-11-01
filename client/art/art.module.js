import angular from 'angular';
import angularResource from 'angular-resource';

import artAPIService from './art-api.service';
import artPageComponent from './art-page.component';

const ArtModule = angular.module('art', [
    'ngResource',
    angularResource,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('artAPIService', artAPIService)
    .component('artPage', artPageComponent);

export default ArtModule;
