
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
        ctrl.artIndex = Math.floor(Math.random() * (ctrl.maxRange));
        ctrl.randomPainting = ctrl.paintings[ctrl.artIndex];
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
        ctrl.artistIndex = Math.floor(Math.random() * (ctrl.maxRange));
        return ctrl.artistIndex;
    }


    // populate the wrong answers in multiple choice
    function wrongAnswers() {
        ctrl.wrongAnswers = [];
        ctrl.numberOfWrongAnswers = 4;
        while (ctrl.numberOfWrongAnswers > 0) {
            randomArtist();

            // add to wrong answer list as long as it isn't the right answer
            if (ctrl.artists[ctrl.artistIndex].name !== ctrl.randomPainting.artist.name) {
                // add to wrong answer list as long as not a duplicate
                if (ctrl.wrongAnswers.indexOf(ctrl.artists[ctrl.artistIndex].name) === -1) {
                    ctrl.wrongAnswers.push(ctrl.artists[ctrl.artistIndex].name);
                    ctrl.numberOfWrongAnswers -= 1;
                }
            }
        }
        // add correct answer into wrong answers
        ctrl.wrongAnswers.push(ctrl.randomPainting.artist.name);
        // shuffle list
        ctrl.answerList = [];
        while (ctrl.wrongAnswers.length > 0) {
            // pull random name from wrong answers
            ctrl.maxRange = Math.floor(ctrl.wrongAnswers.length);
            ctrl.answerIndex = Math.floor(Math.random() * (ctrl.maxRange));
            ctrl.name = ctrl.wrongAnswers.splice(ctrl.answerIndex, 1);
            // place name in answer list
            // strip off quotes and brackets
            for (let i = 0; i < ctrl.name.length; i += 1) {
                ctrl.answerList.push(ctrl.name[i]);
            }
        }
    } // end wrongAnswers


    // take user choice and determine right/wrong and take appropriate action
    ctrl.userChoice = function userChoice(selection) {
        console.log('user answer: ', selection);
        
    };


    getArt().then(randomPic).then(getArtist).then(wrongAnswers);
}

export default ArtPageController;

