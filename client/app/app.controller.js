

function AppController(artAPIService, $state) {
    const ctrl = this;

    artAPIService.getMe().then((me) => {
        ctrl.username = me.username;
        // if logged in load state...
        $state.go('artStaging');
        // console.log('app.controller.js $state: ', $state);
    },
        // if not logged in load state...
        () => {
            $state.go('artPage');
        });
}

export default AppController;
