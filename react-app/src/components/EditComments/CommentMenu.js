import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from '../../store/comment';
import "./CommentMenu.css";

function CommentMenu({ comment, setEditComment, showCommentEdit }) {
    const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector((state) => state?.session?.user)
    const dispatch = useDispatch();


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const handleDelete = async (commentId) => {
        return await dispatch(deleteComment(commentId))
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);


    return (
        <>
            {sessionUser?.id === comment?.user_id && <div className="comment-edit-delete-button" onClick={openMenu}>
                <svg aria-label="More options" className="three-dots-comments" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>}
            <div className="dropdown">
                {showMenu && (
                    <div className="comment-dropdown">
                        <div className="edit-comment-button">
                            <div className="edit-comment" onClick={() => setEditComment(comment?.id, !showCommentEdit)}>Edit</div>
                        </div>
                        <div className="delete-comment-button">
                            <div className="delete-comment" onClick={() => handleDelete(comment?.id)}>Delete</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CommentMenu;
