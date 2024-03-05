import React, { useEffect } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../store/commentSlice";

const Comment = ({ data }) => {
  //console.log(data?.textOriginal);
  return (
    <div className="flex p-2">
      <img
        className="w-16 h-16 p-2 rounded-full"
        alt="user"
        src={data?.authorProfileImageUrl}
      />
      <div>
        <div className="py-1 font-bold">{data?.authorDisplayName}</div>
        <div className="font-light text-sm">{data?.textOriginal}</div>
      </div>
    </div>
  );
};

const CommentsList = ({ list, isComment }) => {
  //isComment && console.log("Comments: ",list);
  return (
    list?.length > 0 &&
    list.map((comment) => {
      // comment.replies && console.log("Comment: ",comment?.replies?.comments?.length)
      return (
        <div className="hidden md:block" key={comment?.id}>
          <Comment
            data={
              isComment
                ? comment?.snippet
                : comment?.snippet?.topLevelComment?.snippet
            }
          />
          {comment?.replies?.comments?.length > 0 && (
            <div className="pl-16">
              <CommentsList
                list={comment?.replies?.comments}
                isComment={true}
              />
            </div>
          )}
        </div>
      );
    })
  );
};

const CommentsContainer = ({ videoID }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getcomments();
  }, []);

  const getcomments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_API.replace("[VIDEO_ID]", videoID)
    );
    const response = await data.json();
    //console.log(response);
    dispatch(setComments(response));
  };

  const commentsList = useSelector((store) => store.comments.list);

  return (
    <>
      <div className="py-2">
        <h1 className="text-2xl font-bold hidden md:block">Comments: </h1>
          <CommentsList list={commentsList?.items} />
      </div>
    </>
  );
};

export default CommentsContainer;
