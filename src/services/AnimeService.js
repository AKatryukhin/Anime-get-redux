export default class AnimeService {
  getAnimeList() {
    return fetch(
      'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0',
      {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        },
      }
    ).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }
}
