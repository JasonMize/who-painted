
function artAPIService($resource) {
    const api = {
        artwork: $resource('/api/artwork/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };

    return api;
}

export default artAPIService;

