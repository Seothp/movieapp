import { TMD_URL, TMD_API_KEY, DISCOVER_PATH } from './constants'

export class TMD_Api {
    async fetchMovie(id) {
        const data = await fetch(`${TMD_URL}movie/${id}?${TMD_API_KEY}`)
        return await data.json()
    }
    async fetchMovies(page) {
        const data = await fetch(`${TMD_URL}${DISCOVER_PATH}movie?${TMD_API_KEY}&page=${page}`)
        const parsedData = await data.json()
        return parsedData.results
    }
    async fetchTvShow(id) {
        const data = await fetch(`${TMD_URL}tv/${id}?${TMD_API_KEY}`)
        return await data.json()
    }
    async fetchTvShows(page) {
        const data = await fetch(`${TMD_URL}${DISCOVER_PATH}tv?${TMD_API_KEY}&page=${page}`)
        const parsedData = await data.json()
        return parsedData.results
    }
    async fetchWithSearch(searchArea, searchValue, page) {
        const data = await fetch(`${TMD_URL}search/${searchArea}?${TMD_API_KEY}&page=${page}&query=${searchValue}`)
        return await data.json()
    }
    async fetchTvShowSeason(id, season_number) {
        const data = await fetch(`${TMD_URL}tv/${id}/season/${season_number}?${TMD_API_KEY}`)
        return data.json()
    }
    async fetchTvEpisode(tvShowId, season_number, episode_number) {
        const data = await fetch(`${TMD_URL}tv/${tvShowId}/season/${season_number}/episode/${episode_number}?${TMD_API_KEY}`)
        return data.json()
    }
}