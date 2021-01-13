import React from "react";
import "./Style.css";

export const Post = () => {
  return (
    <div className="card gedf-card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mr-2">
              <img
                className="rounded-circle"
                width="45"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </div>
            <div className="ml-2">
              <div className="h5 m-0">@bootdey</div>
              <div className="h7 text-muted">Mark Lee Smith</div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="card-body">
        <div className="text-muted h7 mb-2">
          {" "}
          <i className="fa fa-clock-o"></i>10 min ago
        </div>
        <a className="card-link" href="/">
          <h5 className="card-title">
            Lorem ipsum dolor sit amet, consectetur adip.
          </h5>
        </a>

        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi
          fuga quia quaerat cum, obcaecati hic, molestias minima iste
          voluptates.
        </p>
      </div>
      <div className="card-footer ">
        
      <i class="fas fa-thumbs-up"></i> Like
       
        
          <i className="fa fa-comment pointer "></i> Comment
      

      </div>
    </div>
  );
};
