
// function artService($resource, $http) {
//     const artworkResource = $resource('/api/artwork/:id/', { id: '@id' });
//     return {
//         getMe() {
//             return $http.get('/api/me/').then(response => response.data);
//         },
//         getAllArtwork() {
//             return artworkResource.get({}).$promise.then((data) => {
//                 return data.results;
//             });
//         },
//         getArtwork(id) {
//             return artworkResource.get({ id }).$promise.then((data) => {
//                 return data;
//             });
//         },

//     };
// }

// export default artService;
