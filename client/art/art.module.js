import angular from 'angular';

import artPageComponent from './art-page.component';

const ArtModule = angular.module('art', [
])
    .component('artPage', artPageComponent);

export default ArtModule;
