import Image from "next/image";
import FeaturedMovie from "../models/FeaturedMovie";
import { useContext } from "react";
import { CurrentContext } from "../lib/CurrentContext";
import { LibraryContext } from '../lib/FavoritesContext';
import { AccountContext } from '../lib/AccountsContext';
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import { UserContext } from "../lib/AuthContext";

const MovieModal: React.FC<{ open: boolean, movie: FeaturedMovie | null }> = (props) => {

  const currentContext = useContext(CurrentContext);
  const libraryContext = useContext(LibraryContext);
  const accountContext = useContext(AccountContext);
  const { user } = useContext(UserContext)

  const closeHandler = () => {
    currentContext.setIsModalOpen(currentContext.isOpen);
  }

  const releaseYear = props.movie?.releaseDate?.split('-')[0];

  const addLibraryHandler = () => {
    libraryContext.addLibraryHandler(props.movie!);
    accountContext.currentAccount?.addMovie(props.movie!);
    console.log(accountContext.currentAccount)
    addMovie()
  }

  //add movie to library array in firestore under the current users accounts collection by account username field
  const addMovie = async () => {
    // const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
      // const item = doc.data();
      // console.log(item)
      // if(item.uid === user?.uid){
        console.log("found")
        try {
          // const docRef = setDoc(doc(db, "users", user!.uid, "accounts", accountContext.currentAccount!.username, "library")
          const docRef = setDoc(doc(db, "users", user!.uid, "accounts", accountContext.currentAccount!.username, "library", props.movie!.title), {
            title: props.movie!.title,
            backdropPath: props.movie!.backdropPath,
            id: props.movie!.id,
            overview: props.movie!.overview,
            posterPath: props.movie!.posterPath,
            releaseDate: props.movie!.releaseDate,
            voteAverage: props.movie!.voteAverage,
            // mediaType: props.movie?.mediaType
          });
          console.log("Document written with ID: ");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    // });
  // }


if (!props.open) return null

return (
<>
  <div onClick={closeHandler} className='modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-[2000]' ></div>
    <div className='bg-zinc-900 text-zinc-200 flex flex-col items-center rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-3xl overflow-y-scroll scrollbar-hide h-5/6 z-[2001]'>
      <div className="hover:bg-zinc-400 rounded-full bg-opacity-50 active:scale-95 absolute top-3 right-3"
      onClick={closeHandler}
      >
      <Image src="/close.svg" height={40} width={40} alt="X" />
      
      </div>
      <div className="w-full rounded-xl">
        <Image src={props.movie!.backdropPath} height={800} width={800} alt={props.movie!.title}/>
      </div>
      <div className="flex w-full mt-1 ml-5 gap-5">
      {releaseYear && <h2 className=" ml-16 font-semibold text-lg">{releaseYear}</h2>}
        {props.movie?.mediaType && <h2 className=" ml-16 font-semibold text-lg">{props.movie?.mediaType}</h2>}
        <div onClick={addLibraryHandler} className="hover:cursor-pointer active:scale-90 p-1 bg-zinc-800 rounded-2xl flex items-centers pr-2 font-semibold hover:bg-zinc-500">
        <Image className="" src="/add.svg" height={20} width={20} alt="add"/>
        <p>Add to Library</p>
        </div>
      </div>
      <div className="p-5">
      <p>{props.movie?.overview}</p>
      </div>
  </div>
</> 
)
  
}

export default MovieModal