
function ArtPageController(artAPIService) {
    const ctrl = this;


    // take user choice and determine right/wrong and take appropriate action
    ctrl.userChoice = function userChoice(selection) {
        // if selection is correct...
        if (selection.name === ctrl.randomPainting.artist.name) {
            // if they get it correct first try, remove painting from pack
            console.log('correct: ', ctrl.artSet);
            if (ctrl.correctFirstTime === true) {
                ctrl.artSet.splice(ctrl.artIndex, 1);
                console.log('list after slice: ', ctrl.artSet);
            }

            // eslint-disable-next-line no-param-reassign
            selection.correct = true;
            ctrl.correctAnswer = true;
            ctrl.incorrectAnswer = false;

        // if selection is wrong...
        } else {
            // eslint-disable-next-line no-param-reassign
            selection.incorrect = true;
            ctrl.incorrectAnswer = true;
            console.log('wrong: ', ctrl.artSet);
            ctrl.correctFirstTime = false;
        }

        // console.log('userChoice');
    };


    // takes wrong answers and correct answer and creates answerList
    function multipleChoiceList() {
        // add correct answer into wrong answers
        ctrl.wrongAnswers.push(ctrl.randomPainting.artist.name);

        // shuffle list
        ctrl.answerList = [];
        while (ctrl.wrongAnswers.length > 0) {
            // pull random name from wrong answers
            ctrl.maxRange = Math.floor(ctrl.wrongAnswers.length);
            ctrl.answerIndex = Math.floor(Math.random() * (ctrl.maxRange));
            ctrl.name = ctrl.wrongAnswers.splice(ctrl.answerIndex, 1);
            // place name in answer list and strip quotes and brackets
            for (let i = 0; i < ctrl.name.length; i += 1) {
                const artist = { name: ctrl.name[i] };
                ctrl.answerList.push(artist);
            }
        }

        // console.log('multipleChoiceList');
        // console.log('ctrl.answerList: ', ctrl.answerList);
    }


    // get random artist from the Artist array
    function randomArtist() {
        ctrl.maxRange = Math.floor(ctrl.artists.length);
        ctrl.artistIndex = Math.floor(Math.random() * (ctrl.maxRange));

        // console.log('randomArtist');
        // console.log('ctrl.artistIndex: ', ctrl.artistIndex);
    }


    // populate the wrong answers in multiple choice
    function wrongAnswers() {
        ctrl.wrongAnswers = [];
        ctrl.numberOfWrongAnswers = 3;
        while (ctrl.numberOfWrongAnswers > 0) {
            // get name
            randomArtist();
            // add name to wrong answer list as long as it isn't the right answer
            if (ctrl.artists[ctrl.artistIndex].name !== ctrl.randomPainting.artist.name) {
                // add name to wrong answer list as long as not a duplicate
                if (ctrl.wrongAnswers.indexOf(ctrl.artists[ctrl.artistIndex].name) === -1) {
                    ctrl.wrongAnswers.push(ctrl.artists[ctrl.artistIndex].name);
                    ctrl.numberOfWrongAnswers -= 1;
                }
            }
        }

        // console.log('wrongAnswers');
        // console.log('ctrl.wrongAnswers: ', ctrl.wrongAnswers);
        multipleChoiceList();
    }


    // get all Artist objects
    function getArtist() {
        return artAPIService.artist.get().$promise.then((data) => {
            ctrl.artists = data.results;

            // console.log('getArtist');
            // console.log('ctrl.artists: ', ctrl.artists);
            wrongAnswers();
        });
    }


    // get a random object from the Artwork array
    // use object for multiple choice
    function randomPic() {
        ctrl.maxRange = Math.floor(ctrl.artSet.length);
        ctrl.artIndex = Math.floor(Math.random() * (ctrl.maxRange));
        ctrl.randomPainting = ctrl.artSet[ctrl.artIndex];

        // console.log('randomPic');
        // console.log('ctrl.randomPainting: ', ctrl.randomPainting);
        getArtist();
    }


    // identify art pack and get art from it
    function getArtPack() {
        return artAPIService.artpack.get().$promise.then((data) => {
            ctrl.artPack = data.results;
            // get id of artPack
            ctrl.packID = 1;

            // loop all paintings and grab the ones that belong to art pack
            ctrl.artSet = [];
            for (let i = 0; i < ctrl.paintings.length; i += 1) {
                if (ctrl.paintings[i].artPack.id === ctrl.packID) {
                    ctrl.artSet.push(ctrl.paintings[i]);
                }
            }

            // console.log('getArtPack');
            // console.log('ctrl.artSet: ', ctrl.artSet);
            randomPic();
        });
    }


    // get all Artwork objects
    function getArt() {
        return artAPIService.artwork.get().$promise.then((data) => {
            ctrl.paintings = data.results;

            // console.log('getArt');
            // console.log('ctrl.paintings: ', ctrl.paintings);
            getArtPack();
        });
    }


    // get next image and questions
    ctrl.nextQuestion = function nextQuestion() {
        // if there are more paintings in the pack
        if (ctrl.artSet.length >= 1) {
            ctrl.correctAnswer = false;
            ctrl.incorrectAnswer = false;
            ctrl.correctFirstTime = true;
            randomPic();
            wrongAnswers();

        // if you've gotten everything correct
        } else {
            ctrl.lessonFinished = true;
        }
        // console.log('nextQuestion');
    };


    function init() {
        ctrl.correctAnswer = false;
        ctrl.incorrectAnswer = false;
        ctrl.correctFirstTime = true;
        ctrl.lessonFinished = false;
        getArt();
    }

    init();
}

export default ArtPageController;

