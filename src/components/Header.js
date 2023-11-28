import React from "react";

export default function Header() {
  return (
    // <!-- Background image --> */}
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")`,
          height: "290px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6);" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3"> Richard's </h1>
              <h4 className="mb-3"> Solutions </h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    // <>
    //   <p>header</p>
    // </>
  );
}