
function artService($resource, Upload, $http) {
    const artworkResource = $resource('/api/artwork/:id/', { id: '@id' });
    return {
        getMe() {
            return $http.get('/api/me/').then(response => response.data);
        },
        // getAllArt() {
        //     return artworkResource.get({}).$promise.then((data) => {
        //         return data.results;
        //     });
        // },
        // getArt(id) {
        //     return artworkResource.get({ id }).$promise.then((data) => {
        //         return data;
        //     });
        // },
        // uploadArt(file) {
        //     const upload = Upload.upload({
        //         url: '/api/art/upload/',
        //         data: {
        //             art: file,
        //         },
        //     });

        //     return upload;
        // },
    };
}

export default artService;

