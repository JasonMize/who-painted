function ArtLessonController(artAPIService, $stateParams, $state) {
    const ctrl = this;

    // if not logged in keep on artPage
    artAPIService.getMe().then((me) => {
        ctrl.username = me.username;
        // if logged in load state...
    },
        // if not logged in load state...
        () => {
            $state.go('artPage');
        });


    function getLesson() {
        const id = { id: $stateParams.lessonId };
        return artAPIService.artpacklevel.get(id).$promise.then((data) => {
            ctrl.lesson = data.level_set;
            console.log('lesson data: ', data);
        });
    }

    getLesson();
}

export default ArtLessonController;
