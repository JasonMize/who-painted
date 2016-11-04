
function ArtStagingController(artAPIService) {
    const ctrl = this;


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
