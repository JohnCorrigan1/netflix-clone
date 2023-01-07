import FeaturedMovie from "./FeaturedMovie";

export default class Account {
  username: string;
  library: FeaturedMovie[];

  constructor(username: string, library: FeaturedMovie[]) {
    this.username = username;
    this.library = library;
  }

    addMovie(movie: FeaturedMovie) {
        this.library.push(movie)
    }

    removeMovie(movie: FeaturedMovie) {
        this.library = this.library.filter(m => m.id !== movie.id)
    }
    
}
