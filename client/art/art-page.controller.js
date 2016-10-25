
function ArtPageController(artAPIService) {
    const ctrl = this;


    // get all Artwork objects
    function getArt() {
        return artAPIService.artwork.get().$promise.then((data) => {
            ctrl.paintings = data.results;
            return ctrl.paintings;
        });
    }


    // get a random object from the Artwork array
    function randomPic() {
        ctrl.minRange = Math.ceil(0);
        ctrl.maxRange = Math.floor(ctrl.paintings.length);
        ctrl.randomNumber = (
            Math.floor(Math.random() * (ctrl.maxRange - ctrl.minRange)) + ctrl.minRange);
    }


    function getArtist() {
        return artAPIService.artist.get().$promise.then((data) => {
            ctrl.artists = data.results;
            return ctrl.artists;
        });
    }


    getArtist();
    getArt().then(
        randomPic
    );
}

export default ArtPageController;

