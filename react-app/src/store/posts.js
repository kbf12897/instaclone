const LOAD = '/posts/LOAD';

const load = (posts) => ({
    type: LOAD,
    posts
})


export const getPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts', { method: 'GET' });

    if (response.ok) {
        const posts = await response.json();
        dispatch(load(posts));
        return posts;
    }

    return response;
};


const postReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD: {
            const newState = state;
            newState[action.post.id] = action.post;
            return newState;
        };
        default:
            return state;
    }
}

export default postReducer;
