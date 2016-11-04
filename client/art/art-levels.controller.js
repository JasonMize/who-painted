function ArtLevelsController(artAPIService, $stateParams, $state) {
    const ctrl = this;
    ctrl.artpackId = $stateParams.artpackId;
    // if not logged in keep on artPage
    artAPIService.getMe().then((me) => {
        ctrl.username = me.username;
    }, // else, if not logged in load state...
        () => {
            $state.go('artPage');
        });

    // get levels of a particular art pack
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
