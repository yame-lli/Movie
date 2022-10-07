import serve from './index'


export const apiAddComment = (data: any) => {
    return serve({
        url: '/addCommentByUser',
        method: 'POST',
        params: {
            movieId: data.movieId,
            commentContent: data.commentContent
        }
    })
}