import FeaturedMovie from "./FeaturedMovie";

export default class Account {
    username: string;
    library: FeaturedMovie[];
  
    constructor(
     username: string,
        library: FeaturedMovie[]
    ) {
        this.username = username;
        this.library = library;
    }
  }