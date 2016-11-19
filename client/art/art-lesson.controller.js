import { range } from 'ramda';

function ArtLessonController(artAPIService, $stateParams, $state, $timeout) {
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

    // identifies what lesson we are working on
    function getLesson() {
        console.log('$stateParams.levelId: ', $stateParams.levelId);
        const id = { id: $stateParams.levelId };
        console.log('id: ', id);
        return artAPIService.artpacklevel.get(id).$promise.then((data) => {
            ctrl.lesson = data.level_set;
            console.log('ctrl.lesson: ', ctrl.lesson);
        });
    }


    // take user choice and determine right/wrong and take appropriate action
    ctrl.userChoice = function userChoice(selection) {
        // if selection is correct...
        if (selection.name === ctrl.randomPainting.artist.name) {
            // stop the random fade
            ctrl.tileFade = false;

            // if they get it correct first try and within time restraint, remove painting from pack
            if (ctrl.correctFirstTime === true && ctrl.answeredInTime === true) {
                ctrl.artSet.splice(ctrl.artIndex, 1);
            }

            // eslint-disable-next-line no-param-reassign
            selection.correct = true;
            // if correct answer exit timer
            $timeout.cancel(ctrl.stop);
            ctrl.correctAnswer = true;
            ctrl.incorrectAnswer = false;
            ctrl.modalID = 'modalCorrectAnswer';

        // if selection is wrong...
        } else {
            // eslint-disable-next-line no-param-reassign
            selection.incorrect = true;
            ctrl.incorrectAnswer = true;
            ctrl.correctFirstTime = false;
            ctrl.modalID = 'null';
        }
        // console.log('userChoice');
    };


    // timer until answer is incorrect
    function answerTimer() {
        ctrl.stop = $timeout(() => {
            // decrement remaining seconds
            ctrl.countDown -= 1;

            // if zero, stop $timeout and make answer incorrect
            if (ctrl.countDown < 1) {
                $timeout.cancel(ctrl.stop);
                ctrl.answeredInTime = false;
            } else { // count down again
                answerTimer();
            }
        }, 1000); // invoke every 1 second
    }

    // pick random tile to fade
    function revealOne() {
        if (ctrl.tileFade === true) {
            ctrl.maxRange = Math.floor(ctrl.tiles.length);
            ctrl.tileIndex = Math.floor(Math.random() * (ctrl.maxRange));
            ctrl.randomTile = ctrl.tiles.splice(ctrl.tileIndex, 1).pop();

            // set variable for random tile to true - triggers ng-class of fade-tile in html
            ctrl[`startFade${ctrl.randomTile}`] = true;

            // fade all tiles, wait till the last one finishes fading, do stuff
            if (ctrl.tiles.length > 0) {
                // speed of tile fade
                $timeout(revealOne, 200);
            } else { // count answer as incorrect if not provided before the tiles are all revealed
                // wait till last tile finishes fading
                ctrl.end = $timeout(() => {
                    $timeout.cancel(ctrl.end);
                    ctrl.showAnswerTimer = true;
                    answerTimer();
                }, 1500);
            }
        }
    }


    // setup for slow reveal of image
    function revealImage() {
        ctrl.tileFade = true;
        ctrl.tiles = range(1, 49);

        if (ctrl.tileFade === true) {
            // set initial value of all tiles to false
            for (let i = 1; i <= ctrl.tiles.length; i += 1) {
                ctrl[`startFade${i}`] = false;
            }

            revealOne();
        }
    }


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
        revealImage();
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


    function initVariableReset() {
        ctrl.correctAnswer = false;
        ctrl.incorrectAnswer = false;
        ctrl.correctFirstTime = true;
        ctrl.answeredInTime = true;
        ctrl.showAnswerTimer = false;
        // set number of seconds for answerTimer
        ctrl.countDown = 5;
        ctrl.modalID = 'null';
    }

    // get next image and questions
    ctrl.nextQuestion = function nextQuestion() {
        // if there are more paintings in the pack
        if (ctrl.artSet.length >= 1) {
            initVariableReset();
            randomPic();
            wrongAnswers();

        // if you've gotten everything correct
        } else {
            $state.go('artLevels', { artpackId: $stateParams.artpackId });
        }
        // console.log('nextQuestion');
    };


    function init() {
        initVariableReset();
        getLesson();
        getArt();
    }

    init();
}

export default ArtLessonController;
