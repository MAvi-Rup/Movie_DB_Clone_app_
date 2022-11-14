const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0eb7ab7a9f5e88536023d800b992a9e3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;