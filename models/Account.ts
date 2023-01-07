import FeaturedMovie from "./FeaturedMovie";

export default class Account {
    name: string;
    library: FeaturedMovie[];
  
    constructor(
     name: string,
        library: FeaturedMovie[]
    ) {
        this.name = name;
        this.library = library;
    }
  }