

function ArtPageController(artAPIService, $interval) {
    const ctrl = this;

    function getArt() {
        artAPIService.artwork.get().$promise.then((data) => {
            ctrl.paintings = data.results;
        });
    }
    getArt();
    $interval(getArt, 2000);
}

export default ArtPageController;
