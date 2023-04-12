import { useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { useEffect, useRef } from 'react';
import axios from 'axios';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('/api/comments/' + eventId);
        const comments = resp.data;
        setComments(comments);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [showComments]);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment eventId={eventId} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
