const RootID = document.getElementById("root")

const IMG = () =>{
    return (
        <div id="img"><img className="img" src="https://drive.google.com/thumbnail?id=1V23LskxEPkJRy7YcV1pQGqcpSXvrj-LO"  width="150" height="170"/></div>
    );
}

const Details = () =>{
    return(
        <div id="details">
            <div id="name">S.SUGAN</div>
            <div id="email">
                <i className="fa fa-envelope " aria-hidden="true"></i>
                <a href = "mailto: sugan_selvam@srmuniv.edu.in">sugan_selvam@srmuniv.edu.in</a>
            </div>
            <div id="number">
            <i className="fa fa-phone-square " aria-hidden="true"></i>
                <a href="tel:9840476162">9840476162</a>, <a href="tel:7395919619">7395919619</a>
            </div>            
            <div id="linkedin">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <a href="https://www.linkedin.com/in/sugan-selvam-981905199" target="_blank">Sugan_Selvam</a>
            </div>
            <div id="git">
                <i className="fa fa-github" aria-hidden="true"></i>
                <a href="https://github.com/SuganSelvam" target="_blank">SuganSelvam</a>
            </div>
        </div>
    );
}

const Skill = ()=>{
    return(
        <div id="skills">
            <div id="skill" className="subheading">Skill</div>
            <br/>
            <div>
            Programming Skill : C++, Python, Node.js, React, SQL, Javascript
            <br/>
			Technical Skill : Labview, Xilinx, MATLAB
            </div>
            <br/>
            <div className="subheading">Certifications </div>
			<br/>
			<div>Container Inspector : cleared IICL Container Inspector's 2019 fall Cerﬁcaon exam. IICL Certification number : 1008661</div>
            <br/>
            <div className="downdiv">
                <div className="subheading">Download Resume Here </div>
                <br/>
                <a className="downbtn" href="./resume.pdf" download>download</a>
            </div>
        </div>
    );
}

const Content1 =() =>{
    return (
        <div id="content1">
            <div id="about" className="subheading">Career Objective </div>
            <br/>
            <div id="content">To be a part of an organizaon where I can fully ulize my skills in programming languages to make a signiﬁcant contribuon to the success of the employer, while at the same me pursuing my individual growth. Seeking a challenging posion as a data analyst in a wellestablished company that oﬀers professional growth and ample opportunity to learn.</div>
        </div>
    );
}

const Content2 = () =>{
    return (
        <div id="content2">
            <div id="education" className="subheading">Education</div>
            <br/>
            <div className="educ">
                <div><span className="edutitle">2018</span><br/>Electronics and Communication Engineering<br/><span className="edutitle">SRM Institute of Science & Technology</span><br/>74.83%</div>
                <div><span className="edutitle">2014</span><br/>Higher Secondary Education<br/><span className="edutitle">Chettinad Vishyashram</span><br/> 70.43%</div>
                <div><span className="edutitle">2012</span><br/>Secondary Level School Education<br/><span className="edutitle">Kavi Bharathi Vidhyalaya</span><br/> 86.00%</div>
            </div>
        </div>
    );
}

const Content3= () =>{
    return(
        <div id="content3">
            <div id="inplant" className="subheading">In-Plant Training</div>
            <ul>
            <li><strong>Name of organization :</strong> Bharath Sanchar Nigam Limited (BSNL)</li>
            <li><strong>Duration :</strong> 5 Sessions</li>
            <li><strong>Knowledge Accquired :</strong> Transmission Equipments, Switching Equipments, GSM & Broadband Modules</li>
            </ul>
            <ul>
            <li><strong>Name of organization :</strong> UNIQ Technologies</li>
            <li><strong>Duration :</strong> 5 Sessions</li>
            <li><strong>Knowledge Accquired :</strong> Image Processing, Android Development</li>
            </ul>
        </div>
    );
}

const Content4 = () =>{
    return(
        <div id="content4">
            <div id="internship" className="subheading">Internship</div>
            <ul>
            <li><strong>Name of organization :</strong> HCL Technologies</li>
            <li><strong>Duration :</strong> 15 Sessions</li>
            <li><strong>Knowledge Accquired :</strong> Embedded Systems and Networking</li>
            </ul>
            <ul>
            <li><strong>Name of organization :</strong> DLK Technologies</li>
            <li><strong>Duration :</strong> 15 Sessions</li>
            <li><strong>Knowledge Accquired :</strong> VLSI</li>
            </ul>
        </div>  
    )
}

const Content5 =() =>{
    return(
        <div id="content5">
            <div id="project" className="subheading">Projects</div>
            <br/>
            <div> Built <strong>Self Driving Car</strong> using <strong>Python</strong> with <strong>Machine Learning and Image Processing</strong> which successfully navigated through model road and had ability to move according with the traﬃc signal and also had the ability to stop in presence of obstacles.</div>
        </div>  
    );
}


const Left = () => {
    return (
        <div id="left">
            <IMG />
            <br/>
            <Details />
            <br/>
            <Skill />

        </div>
    );
}

const Right = () =>{
    return (
        <div id="right">
            <Content1 />
            <br/>
            <Content2 />
            <br/>
            <Content3 />
            <br/>
            <Content4 />
            <Content5 />      
        </div>
    )
}
const Main =()=> {
    return (
        <div id="main">
            <Left />
            <Right />
        </div>
    );
}        

ReactDOM.render(<Main />,RootID);