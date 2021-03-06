
function artAPIService($resource, $http) {
    const api = {
        getMe() {
            return $http.get('/api/me/').then(response => response.data);
        },
        getArtPackArtwork(id) {
            return this.artpackartwork.get({ id }).$promise.then((data) => {
                return data;
            });
        },
        getArtPackLevel(id) {
            return this.level.get({ id }).$promise.then((data) => {
                return data;
            });
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
            },
        ),
        artist: $resource('/api/artist/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
        level: $resource('/api/level/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
        userlevel: $resource('/api/userlevel/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
        artpacklevel: $resource('/api/artpacklevel/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }
        ),
        artpackartwork: $resource('/api/artpackartwork/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            },
        ),
        userartpack: $resource('/api/userartpack/:id/',
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

