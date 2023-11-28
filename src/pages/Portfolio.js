import React from "react";
// import "./pages.css";


export default function Portfolio() {
    return (
        <div class="row row-cols-1 row-cols-sm-3 g-4">
            <div className="col">
                <div className="card w-60 h-40">
                    <img
                        src="https://images.unsplash.com/photo-1472114864173-39596323454f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        class="card-img-top"
                        alt="Hollywood Sign on The Hill"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Work Day Scheduler App</h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div>
                            <a
                                href="https://crich96.github.io/a-good-one/"
                                className="btn btn-primary"
                            >
                                App
                            </a>
                            <a
                                href="https://github.com/CRich96/a-good-one"
                                className="btn btn-primary"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-60 h-40">
                    <img
                        src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        class="card-img-top"
                        alt="Palm Springs Road"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Concert Finder App</h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div>
                            <a
                                href="https://crich96.github.io/concert-finder/"
                                className="btn btn-primary"
                            >
                                App
                            </a>
                            <a
                                href="https://github.com/CRich96/concert-finder"
                                className="btn btn-primary"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-60 h-40">
                    <img
                        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
                        class="card-img-top"
                        alt="Los Angeles Skyscrapers"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Tech Blog App</h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content.
                        </p>
                        <div>
                            <a
                                href="https://guarded-refuge-85630-b1fc6daf1801.herokuapp.com/"
                                className="btn btn-primary"
                            >
                                App
                            </a>
                            <a
                                href="https://github.com/CRich96/MVCTechBlog"
                                className="btn btn-primary"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-60 h-40">
                    <img
                        src="https://images.unsplash.com/photo-1634224143538-ce0221abf732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        class="card-img-top"
                        alt="Skyscrapers"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Flex Flow App</h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div>
                            <a
                                href="https://crich96.github.io/Flex-Flow2/"
                                className="btn btn-primary"
                            >
                                App
                            </a>
                            <a
                                href="https://github.com/CRich96/Flex-Flow2Links to an external site."
                                className="btn btn-primary"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //   <div className="aboutMe">
        //     <img src={ProfilePic} className="profile-picture" alt="profile" />
        //     <p className="aboutMe">
        //       Hi, I'm Christian, full-stack web developer.
        //       <br />
        //       I am in this industry to solve real-world problems with my applications.
        //       <br />
        //       I am currently based in Dallas, TX.
        //       <br />
        //       You are welcome to look around.
        //     </p>
        //   </div>
    );
}