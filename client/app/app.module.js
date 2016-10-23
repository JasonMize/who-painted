import angular from 'angular';

import ArtModule from '../art/art.module';

import appComponent from './app.component';


const AppModule = angular.module('app', [
    ArtModule.name,
])
    .component('app', appComponent);

export default AppModule;

