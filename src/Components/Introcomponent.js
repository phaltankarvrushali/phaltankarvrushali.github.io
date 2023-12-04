import React, { Component } from "react";
import "../css/intro.css";


class Intro extends Component{

    render(){

        return(
        <section >
        <div class="jumbotron .jumbotron-fluid jumbobg" id="home" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 padding" name="home">
                        <h2>Hello, I am <br></br></h2>
                        <h1 className="i-name"><b>Vrushali Phaltankar</b></h1>
                        <div className="i-title">
                            <div className="i-wrapper">
                                <div className="i-skills"> Software Engineer</div>
                                <div className="i-skills"> DevOps Engineer</div>
                                <div className="i-skills"> Full-Stack Web Developer</div>
                                <div className="i-skills"> AWS SysOps Administrator</div>
                            </div>
                        </div>
                        <p className="justify">
                        I am a Computer Science Engineer by degree and a Software Developer by skills. I love programming and building software solutions around Automation, DevOps and Web Development.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div className="card cardborder w-100 cardstyling text-center ">
                            <div className="card-body">
                                <img align="right" class="img-fluid mg-fluid mx-auto d-block circle-img rounded-circle" src="images/vrushali.png" alt="Vrushali"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        );
    }
}

export default Intro;