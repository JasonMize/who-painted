function ArtLevelsController(artAPIService, $stateParams, $state) {
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


    function getLevels() {
        const id = { id: $stateParams.artpackId };
        return artAPIService.artpacklevel.get(id).$promise.then((data) => {
            ctrl.levels = data.level_set;
            // console.log('data: ', data);
        });
    }

    getLevels();
}

export default ArtLevelsController;
