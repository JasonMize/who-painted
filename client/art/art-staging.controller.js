
function ArtStagingController(artAPIService, $state) {
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


    // identify art pack and get art from it
    function getArtPack() {
        return artAPIService.artpack.get().$promise.then((data) => {
            ctrl.artPack = data.results;
        });
    }


    function getArtPackArt() {
        return artAPIService.artpackartwork.get().$promise.then((data) => {
            ctrl.artPackArt = data.results;
        });
    }


    getArtPack();
    getArtPackArt();
}

export default ArtStagingController;
