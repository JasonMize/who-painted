

function ArtPageController(artAPIService, $interval) {
    const ctrl = this;

    ctrl.randomNumber;
    // ctrl.paintings;
    console.log('line 8 paintings: ', ctrl.paintings);

    function getArt() {
        artAPIService.artwork.get().$promise.then((data) => {
            ctrl.paintings = data.results;
            // console.log('line 12 getArt paintings: ', ctrl.paintings);
        });
    }
    getArt();
    $interval(getArt, 2000);


    function randomPic() {
        console.log('line 18 randomPic start paintings: ', ctrl.paintings);
        ctrl.dictLength = 0;
        for (ctrl.painting in ctrl.paintings) {
            ctrl.dictLength ++;
        }

        ctrl.minRange = Math.ceil(0);
        ctrl.maxRange = Math.floor(ctrl.dictLength);
        ctrl.randomNumber = Math.floor(Math.random() * (ctrl.maxRange - ctrl.minRange)) + ctrl.minRange;
        console.log(ctrl.randomNumber);
        console.log('line 29 randomPic end paintings: ', ctrl.paintings);
    }


    function init() {
        randomPic();
    }


    init();
}

export default ArtPageController;

