import {useMovieStore} from './movie'
import {useUserStore} from './user'

export default function useStore() {
  return {
    userStore: useUserStore(),
    movieStore: useMovieStore(),
  }
}