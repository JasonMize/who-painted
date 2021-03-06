

function AppController(artAPIService, $state) {
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
}

export default AppController;
