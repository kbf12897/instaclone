const LOAD = '/posts/LOAD';
const LOAD_ONE = '/posts/load_one';
const CREATE = '/posts/new';
const EDIT = '/posts/edit';
const DELETE = '/posts/delete';

//——————————————————————————————————————————————————————————————————————————————————

const load = (posts) => ({
    type: LOAD,
    posts
});

const loadOne = (post) => ({
    type: LOAD_ONE,
    post
});

const create = (post) => ({
    type: CREATE,
    post
});

const update = (post) => ({
    type: EDIT,
    post
});

const destroy = (postId) => ({
    type: DELETE,
    postId
});


//——————————————————————————————————————————————————————————————————————————————————

export const getPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts/', { method: 'GET' });

    if (response.ok) {
        const posts = await response.json();
        dispatch(load(posts));
        return posts;
    }

    return response;
};

export const getPost = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`, { method: 'GET' });

    if (response.ok) {
        const post = await response.json();
        dispatch(loadOne(post));
        return post;
    };

    return response;
};

export const createPost = (payload) => async (dispatch) => {
    const response = await fetch(`/api/posts/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const newPost = await response.json();
        dispatch(create(newPost));
        return newPost;
    };

    return response;
};

export const updatePost = (payload) => async (dispatch) => {
    const response = await fetch(`/api/posts/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    console.log('HEELLLLLOOOOO')

    if (response.ok) {
        const updatedPost = await response.json();
        dispatch(update(updatedPost));
        return updatedPost;
    };

    return response;
};

export const deletePost = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`, { method: 'DELETE' });

    if (response.ok) {
        const postId = await response.json();
        dispatch(destroy(postId));
        return response;
    };
}

//———————————————————————————————————REDUCER——————————————————————————————————————————

const postReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case LOAD: {
            newState = {...state};
            action.posts['all_posts'].forEach((post) => newState[post.id] = post);
            return newState;
        }
        case LOAD_ONE: {
            newState = state;
            newState[action.post.id] = action.post;
            return newState;
        }
        case CREATE: {
            newState = state;
            newState[action.post.id] = action.post;
            return newState;
        }
        case EDIT: {
            newState = state;
            newState[action.post.id] = action.post;
            return newState;
        }
        case DELETE: {
            newState = state;
            newState[action.post.id] = action.post;
            return newState;
        }
        default:
            return state;
    }
}

export default postReducer;
