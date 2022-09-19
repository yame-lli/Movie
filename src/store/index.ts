import {useMovieStore} from './movie'
import {useUserStore} from './user'

export default function useStore() {
  return {
    user: useUserStore(),
    movie: useMovieStore(),
  }
}