import React from "react";
import { Header } from "./Header";
import { PersonalInformation } from "./PersonalInformation";
import { Schools } from "./Schools";
import { UserInfo } from "./UserInfo";
import { Skills } from "./Skills";
import { Friends } from "./Friends";
import { Photo } from "./Photo";
import {useSelector} from 'react-redux'
import "./User.css";

export const User = () => {

const  loading =useSelector(state=>state. authReducer.loading)
const  user =useSelector(state=>state. authReducer.user)

   

  return (
    <>
    {loading && !user?"..... loading":

    <div class="layout-content">
      <div class="container flex-grow-1 container-p-y">
        <div class="container-m-nx container-m-ny theme-bg-white mb-4">
          {user.map(user=><Header user={user} />)}
          <hr class="m-0" />
        </div>
        <div class="row">
          <div class="col">
            <PersonalInformation />
            <Schools />
          </div>
          <div class="col-xl-4">
            <UserInfo />
            <Skills />
            <Friends />
            <Photo />
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};
