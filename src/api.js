import { TMD_URL, TMD_API_KEY, DISCOVER_PATH } from './constants'

export class TMD_Api {
    async fetchMovie(id) {
        const MOVIE_URL = `${TMD_URL}movie/${id}?${TMD_API_KEY}`
        const data = await fetch(MOVIE_URL)
        return data.json()
    }
    async fetchMovies(page) {
        const MOVIES_URL = `${TMD_URL}${DISCOVER_PATH}movie?${TMD_API_KEY}&page=${page}`
        const data = await fetch(MOVIES_URL)
        return data.json()
    }
    async fetchTvShow(id) {
        const TV_SHOW_URL = `${TMD_URL}tv/${id}?${TMD_API_KEY}`
        const data = await fetch(TV_SHOW_URL)
        return data.json()
    }
    async fetchTvShows(page) {
        const TV_SHOWS_URL = `${TMD_URL}${DISCOVER_PATH}tv?${TMD_API_KEY}&page=${page}`
        const data = await fetch(TV_SHOWS_URL)
        return data.json()
    }
    async fetchWithSearch(searchArea, searchValue, page) {
        const SEARCH_URL = `${TMD_URL}search/${searchArea}?${TMD_API_KEY}&page=${page}&query=${searchValue}`
        const data = await fetch(SEARCH_URL)
        return data.json()
    }
    async fetchTvShowSeason(id, season_number) {
        const TV_SHOW_SEASON_URL = `${TMD_URL}tv/${id}/season/${season_number}?${TMD_API_KEY}`
        const data = await fetch(TV_SHOW_SEASON_URL)
        return data.json()
    }
    async fetchTvShowEpisode(tvShowId, season_number, episode_number) {
        const TV_SHOW_EPISODE_URL = `${TMD_URL}tv/${tvShowId}/season/${season_number}/episode/${episode_number}?${TMD_API_KEY}`
        const data = await fetch(TV_SHOW_EPISODE_URL)
        return data.json()
    }
}