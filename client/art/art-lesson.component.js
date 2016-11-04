import template from './art-lesson.html';

import ArtLessonController from './art-lesson.controller';

const artLessonComponent = {
    template,
    controller: ArtLessonController,
    controllerAs: 'lessonCtrl',
};

export default artLessonComponent;
