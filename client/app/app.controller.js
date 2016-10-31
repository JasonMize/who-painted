

function AppController(artAPIService) {
    const ctrl = this;

    artAPIService.getMe().then((me) => {
        ctrl.username = me.username;
    });
}

export default AppController;
