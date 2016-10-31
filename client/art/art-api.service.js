
function artAPIService($resource, $http) {
    const api = {
        getMe() {
            return $http.get('/api/me/').then(response => response.data);
        },

        artpack: $resource('/api/artpack/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
        artwork: $resource('/api/artwork/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
        artist: $resource('/api/artist/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
    };

    return api;
}


export default artAPIService;

