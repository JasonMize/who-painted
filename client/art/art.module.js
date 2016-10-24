import angular from 'angular';
import 'angular-resource';

import artPageComponent from './art-page.component';

import artAPIService from './art-api.service';

const ArtModule = angular.module('art', [
    'ngResource',
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('artAPIService', artAPIService)
    .component('artPage', artPageComponent);

export default ArtModule;
