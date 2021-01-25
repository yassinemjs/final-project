import React, { useEffect } from "react";
import { Header } from "./Header";
import { DateEmployee } from "./DateEmployee";
import { GetPosts } from "./GetPosts";
import { ProfessionalInformation } from "./ProfessionalInformation";
import { Note } from "./Note";

import { getPostById } from "../../js/action/PostAction";
import { useDispatch, useSelector } from "react-redux";
import "./User.css";

export const User = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);
  const post = useSelector((state) => state.post.userPost);
  const isloading = useSelector((state) => state.post.loading);
  // console.log(user);

  useEffect(() => {
    dispatch(getPostById());
  }, [dispatch]);

  if (isloading && !post) {
    return <p>loading....</p>;
  }

  return (
    <>
      {loading && !user ? (
        "..... loading"
      ) : (
        <div class="layout-content">
          <div class="container flex-grow-1 container-p-y">
            <div class="container-m-nx container-m-ny theme-bg-white mb-4 head">
              {user.map((user) => (
                <Header user={user} />
              ))}
              <hr class="m-0" />
            </div>
            <div class="row">
              <div class="col">
                {user.map((user) => (
                  <DateEmployee key={user._id} user={user} />
                ))}
                {post ? <GetPosts post={post} /> : ""}
              </div>
              <div class="col-xl-4">
                {user.map((user) => (
                  <ProfessionalInformation key={user._id} user={user} />
                ))}
                <Note />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
