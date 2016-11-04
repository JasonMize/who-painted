import angular from 'angular';
import angularResource from 'angular-resource';

import artAPIService from './art-api.service';
import artPageComponent from './art-page.component';
import artStagingComponent from './art-staging.component';
import artSignupInviteComponent from './art-signup-invite.component';
import artLevelsComponent from './art-levels.component';
import artLessonComponent from './art-lesson.component';

const ArtModule = angular.module('art', [
    angularResource,
])
    .config(($resourceProvider) => {
        // eslint-disable-next-line no-param-reassign
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
        .factory('artAPIService', artAPIService)
        .component('artPage', artPageComponent)
        .component('artStaging', artStagingComponent)
        .component('artSignupInvite', artSignupInviteComponent)
        .component('artLevels', artLevelsComponent)
        .component('artLesson', artLessonComponent);
export default ArtModule;
