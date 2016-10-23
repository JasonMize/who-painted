

function ArtPageController(artAPIService, $interval) {
    const ctrl = this;

    function getArt() {
        artAPIService.art.get().$promise.then((data) => {
            ctrl.artworks = data.results;
        });
    }
    getArt();
    $interval(getArt, 2000);
}

export default ArtPageController;
