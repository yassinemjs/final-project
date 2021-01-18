import React from "react";
import { Header } from "./Header";
import { DateEmployee } from "./DateEmployee";
import { GetPosts } from "./GetPosts";
import { ProfessionalInformation } from "./ProfessionalInformation";
import { Note } from "./Note";
import { useSelector } from "react-redux";
import "./User.css";

export const User = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);

  return (
    <>
      {loading && !user ? (
        "..... loading"
      ) : (
        <div class="layout-content">
          <div class="container flex-grow-1 container-p-y">
            <div class="container-m-nx container-m-ny theme-bg-white mb-4 head">
              <Header user={user} />
              <hr class="m-0" />
            </div>
            <div class="row">
              <div class="col">
                <DateEmployee />
                <GetPosts />
              </div>
              <div class="col-xl-4">
                <ProfessionalInformation />
                <Note />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
