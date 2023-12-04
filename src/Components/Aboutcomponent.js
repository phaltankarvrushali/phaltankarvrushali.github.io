import React, { Component } from "react";
//import ReactRoundedImage from "react-rounded-image";
import { Fade } from "react-awesome-reveal";
import "../css/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow, faGit, faReact, faNodeJs, faPython, faJs, faJira, faJava, faAws, faDocker, faLinux, faHtml5, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { faDatabase } from "@fortawesome/fontawesome-free-solid";

 /*
        github-
        git-
        react-
        redux
        node-
        express
        mongodb-
        mysql-
        django-
        flask-
        python-
        c++-
        javascript-
        keras-
        scikit learn-
        tensorflow-
        */


class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            width:0,
            height:0,
            moveX:"",
            moveY:""
        };
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions = () => {
        this.setState({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }

    _handleMouseMove = (e) => {
        const {width,height} = this.state;
        this.setState({
            moveX: ((width/2) - e.nativeEvent.clientX) *0.01 +'px',
            moveY: ((height/2) - e.nativeEvent.clientY) *0.01 +'px'
        })
    };

    _defaultstate = (e) => {
        const {width,height} = this.state;
        this.setState({
 
            moveX: "",
            moveY: ""
        })
    }


    render(){
        const mystyle = {
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all', // 'ms' is the only lowercase vendor prefix
            marginLeft: this.state.moveX, 
            marginTop:this.state.moveY
          };

        //onMouseMove={this._handleMouseMove} onMouseLeave={this._defaultstate} style={mystyle}

       


        return(
            <section>
                <div className="container ">



                    <div className="row justify-content-center">
                        <div className="heading" id="about" name="about">
                            <Fade triggerOnce={"true"}>
                                <p >
                                  <center> <h1 className="fontc"> My Skills And Experiences <FontAwesomeIcon icon={faStar} /> </h1></center> 
                                </p>
                            </Fade>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <Fade cascade triggerOnce={"true"} delay={500}>
                                <p className="justify">
                                I’m a super curious person and I spend a lot of time coding and developing software, but there’s also a lot more to it. I am a determined and quality-driven DevOps Cloud Engineer with 5 years of hands-on experience in automating key processes leveraging DevOps tools and technologies.
                                <br></br><br></br>I have been programming for 5+ years now and it has become a true passion of mine. This passion continually grows with every new innovation in the tech industry. I have experience in multiple software domains and technologies, ranging from <span className="pcolor">Software Development, Automation, DevOps, Amazon Web Service, to Front-end Web Development and Platform Engineering. </span>
                                <br></br><br></br>I enjoy the collaborative nature of working on a team, building technological products. The feedback, discussion, and review in this environment brings out the best in each individual member, and is also a crucial component in my own personal development.
                                <br></br><br></br>Apart from this, I am also interested in <span className="pcolor">Photography, Travelling and Reading.</span>
                                </p>
                            </Fade>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="row col-sm-5">
                        <div className="heading" id="about" name="about">
                            <Fade triggerOnce={"true"}>
                                <p >
                                  <center> <h1 className="fontc"> Something about me! <FontAwesomeIcon/> </h1></center> 
                                </p>
                            </Fade>
                        </div>
                    </div>
                    
                    <div className="row col-sm-5">
                        <div className="col-sm-12">
                            <Fade cascade triggerOnce={"true"} delay={500}>
                                <p className="justify">
                                I am a graduate student at Northeastern University pursuing Master of Science in Information Systems.
                                Currently, I am working as a Graduate Research Assistant with the Research Computing Team at Northeastern University while pursuing my Master's. I am a very self-driven and motivated person. Stress never lets me down, it keeps me going.
                                <br></br><br></br>I am opened to SDE and DevOps opportunities. If you would like me to be part of your team, feel free to email me at phaltankarvrushali70@gmail.com.
                                </p>
                            </Fade>
                        </div>
                    </div>

                <div class="cow col-sm-5 right top padding">
                    <Fade triggerOnce={"true"}>
                        <p >
                            <center> <h1 className="fontc">Skills <FontAwesomeIcon icon={faStar} /> </h1></center> 
                        </p>
                    </Fade>

                <h4 className="fonts top1">Languages</h4>
                <ul className="skill-bars">
                    <li>
                        <div class="progress percent90"></div>
                        <h4 className="fonts1">Java</h4>
                    </li>
                    <li>
                        <div class="progress percent80"></div>
                        <h4 className="fonts1">Groovy</h4>
                    </li>
                    <li>
                        <div class="progress percent80"></div>
                        <h4 className="fonts1">Shell</h4>
                    </li>
                    <li>
                        <div class="progress percent70"></div>
                        <h4 className="fonts1">Javascript</h4>
                    </li>
                    <li>
                        <div class="progress percent60"></div>
                        <h4 className="fonts1">Python</h4>
                    </li>
                    <li>
                        <div class="progress percent60"></div>
                        <h4 className="fonts1">HTML5 & CSS3</h4>
                    </li>
                </ul>

                <h4 className="fonts top1">Frameworks</h4>
                <ul class="skill-bars">
                    <li>
                        <div class="progress percent85"></div>
                        <h4 className="fonts1">React</h4>
                    </li>
                    <li>
                        <div class="progress percent70"></div>
                        <h4 className="fonts1">NodeJS</h4>
                    </li>
                    <li>
                        <div class="progress percent70"></div>
                        <h4 className="fonts1">Express</h4>
                    </li>
                </ul>

                <h4 className="fonts top1">Cloud</h4>
                <ul class="skill-bars">
                    <li>
                        <div class="progress percent90"></div>
                        <h4 className="fonts1">Amazon Web Services</h4>
                    </li>
                </ul>

                <h4 className="fonts top1">Softwares and Tools</h4>
                <ul class="skill-bars">
                    <li>
                        <div class="progress percent90"></div>
                        <h4 className="fonts1">Git</h4>
                    </li>
                    <li>
                        <div class="progress percent90"></div>
                        <h4 className="fonts1">Jenkins</h4>
                    </li>
                    <li>
                        <div class="progress percent90"></div>
                        <h4 className="fonts1">Docker</h4>
                    </li>
                    <li>
                        <div class="progress percent90"></div>
                        <h4 className="fonts1">Kubernetes</h4>
                    </li>
                </ul>
            </div>

                    <br></br>
                    <br></br>
                    <br></br>


                    <div className="row justify-content-center">
                        <div className="heading">
                            <Fade cascade={"true"} triggerOnce={"true"}>
                                <p>
                                    <h2> Tech Stack <FontAwesomeIcon icon={faStackOverflow} /></h2>
                                </p>
                            </Fade>
                        </div>
                    </div>
              
                
                    <Fade cascade={"true"} triggerOnce={"true"} delay={500}>
                    <div className="row justify-content-center">  
                        <div className="card cardborder w-100 cardstyling text-center ">
                            <div className="card-body">
                       
                                <div className="row justify-content-center">   
                                     <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faGithub} size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faGit} size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faNodeJs} color="#68A063" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faPython} color="#306998" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faJs} color="#3C873A" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faReact} color="#61DBFB" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>                                         
                                </div>
                                <br></br>
                                
                                
                                <div className="row justify-content-center">  
                                    
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <FontAwesomeIcon icon={faHtml5} color="#61DBFB" size="4x"/><br></br>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faJava} color="#61DBFB" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <FontAwesomeIcon icon={faAws} size="4x"/><br></br>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                 

                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/mongo.png" width="70px"></img>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <FontAwesomeIcon icon={faDocker} color="#61DBFB" size="4x"/><br></br>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <FontAwesomeIcon icon={faLinux} size="4x"/><br></br>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <FontAwesomeIcon icon={faDatabase} size="4x"/><br></br>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
                    
            </section>
        );
    }
}

export default About;