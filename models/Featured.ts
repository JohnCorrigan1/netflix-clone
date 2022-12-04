export default class Featured  {
    
    id: number;
    title: string;
    mediaType: string;
    posterPath: string;
    backdropPath: string;
    voteAverage: number;
    overview: string;
    releaseDate: string;

    constructor(id: number, title: string, mediaType: string, posterPath: string, backdropPath: string, voteAverage: number, overview: string, releaseDate: string) {
        this.id = id;
        this.title = title;
        this.mediaType = mediaType;
        this.posterPath = `http://image.tmdb.org/t/p/w500${posterPath}`;
        this.backdropPath = `http://image.tmdb.org/t/p/original${backdropPath}`;
        this.voteAverage = voteAverage;
        this.overview = overview;
        this.releaseDate = releaseDate;
    }
}