function ArtLevelsController(artAPIService, $stateParams) {
    const ctrl = this;

    function getLevels() {
        const id = { id: $stateParams.artpackId };
        return artAPIService.artpacklevel.get(id).$promise.then((data) => {
            ctrl.levels = data.level_set;
            console.log('data: ', data);
        });
    }

    getLevels();
}

export default ArtLevelsController;
