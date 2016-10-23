
function artAPIService($resource) {
    const api = {
        art: $resource('/api/artwork/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };
}

export default artAPIService;

