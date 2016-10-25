
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
    // use object for multiple choice
    function randomPic() {
        ctrl.maxRange = Math.floor(ctrl.paintings.length);
        ctrl.randomArtworkIndex = Math.floor(Math.random() * (ctrl.maxRange));
        ctrl.randomPainting = ctrl.paintings[ctrl.randomArtworkIndex];
        return ctrl.randomPainting;
    }


    // get all Artist objects
    function getArtist() {
        return artAPIService.artist.get().$promise.then((data) => {
            ctrl.artists = data.results;
            return ctrl.artists;
        });
    }


    // get random objects from the Artist array
    function randomArtist() {
        ctrl.maxRange = Math.floor(ctrl.artists.length);
        ctrl.randomArtistIndex = Math.floor(Math.random() * (ctrl.maxRange));
        return ctrl.randomArtistIndex;
    }


    // populate the wrong answers in multiple choice
    function wrongAnswers() {
        ctrl.wrongAnswers = [];
        ctrl.numberOfWrongAnswers = 4;
        while (ctrl.numberOfWrongAnswers > 0) {
            randomArtist();

            // don't add the real artist to the wrong answer list
            if (ctrl.artists[ctrl.randomArtistIndex].name !== ctrl.randomPainting.artist.name) {
                ctrl.wrongAnswers.push(ctrl.artists[ctrl.randomArtistIndex].name);
                ctrl.numberOfWrongAnswers -= 1;
            }
        }
    }

    getArt().then(randomPic).then(getArtist).then(wrongAnswers);
}

export default ArtPageController;

