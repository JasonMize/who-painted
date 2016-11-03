

function AppController(artAPIService, $state) {
    const ctrl = this;

    artAPIService.getMe().then((me) => {
        ctrl.username = me.username;
        $state.go('artStaging');
        // console.log('app.controller.js $state: ', $state);
    },
        // if not logged in load new state
        () => {
            $state.go('artPage');
        });
}

export default AppController;
