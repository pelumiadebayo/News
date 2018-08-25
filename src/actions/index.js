// import fetch from 'cross-fetch'

// export const REQUEST_POSTS = 'REQUEST_POSTS'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const SELECT_CATEGORY = 'SELECT_CATEGORY'
// export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'

// export function selectcategory(category) {
//     return {
//         type: SELECT_CATEGORY,
//         category
//     }
// }

// export function invalidatecategory(category) {
//     return {
//         type: INVALIDATE_CATEGORY,
//         category
//     }
// }

// function requestPosts(category) {
//     return {
//         type: REQUEST_POSTS,
//         category
//     }
// }

// function receivePosts(category, json) {
//     return {
//         type: RECEIVE_POSTS,
//         category,
//         posts: json.data.children.map(child => child.data),
//         receivedAt: Date.now()
//     }
// }

// function fetchPosts(category) {
//     return dispatch => {
//         dispatch(requestPosts(category))
//         return fetch(`https://newsapi.org/v2/sources?category=${category}&apiKey=e009bc5f48c44bd89343a17eee4f539e
//         `)
//             .then(response => response.json())
//             .then(json => dispatch(receivePosts(category, json)))
//     }
// }

// function shouldFetchPosts(state, category) {
//     const posts = state.postsBycategory[category]
//     if (!posts) {
//         return true
//     } else if (posts.isFetching) {
//         return false
//     } else {
//         return posts.didInvalidate
//     }
// }

// export function fetchPostsIfNeeded(category) {
//     return (dispatch, getState) => {
//         if (shouldFetchPosts(getState(), category)) {
//             return dispatch(fetchPosts(category))
//         }
//     }
// }






