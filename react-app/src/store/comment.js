const LOAD = '/comments/LOAD';
const CREATE = '/comments/CREATE';
const UPDATE = '/comments/UPDATE';
const DELETE = '/comments/DELETE';

//——————————————————————————————————ACTIONS————————————————————————————————————————————————

const load = (comments) => ({
    type: LOAD,
    comments
})

const create = (comment) => ({
    type: CREATE,
    comment
})

const update = (comment) => ({
    type: UPDATE,
    comment
})

const destroy = (commentId) => ({
    type: DELETE,
    commentId
})


//——————————————————————————————————THUNKS————————————————————————————————————————————————

export const getComments = (postId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${postId}`)
    if (response.ok) {
        const comments = await response.json();
        dispatch(load(comments))
        return comments;
    }

    return response;
}

export const createComment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        newComment = await response.json();
        dispatch(create(newComment));
        return newComment;
    }

    return response;
}

export const editComment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const updatedComment = await response.json();
        dispatch(update(updatedComment));
        return updatedComment;
    }

    return response;
}

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {method: 'DELETE'})

    if (response.ok) {
        const comment = await response.json();
        dispatch(destroy(comment));
        return response;
    }
}

//——————————————————————————————————REDUCER————————————————————————————————————————————————
