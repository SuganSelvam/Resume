const RootID = document.getElementById("root")

const IMG = () => {
    return (
        <div id="img"><img className="img" src="https://drive.google.com/thumbnail?id=1V23LskxEPkJRy7YcV1pQGqcpSXvrj-LO" width="150" height="170" /></div>
    );
}

const Details = () => {
    return (
        <div id="details">
            <div id="name">S.SUGAN</div>
            <div id="email">
                <i className="fa fa-envelope " aria-hidden="true"></i>
                <a href="mailto: sugan_selvam@srmuniv.edu.in">sugan_selvam@srmuniv.edu.in</a>
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

const Skill = () => {
    return (
        <div id="skills">
            <div id="skill" className="subheading">Skill</div>
            <br />
            <div>
                <div class="listTitle">Programming Skill :</div>
                <ul class="listItem">
                    <li>C++</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>NOSQL</li>
                </ul>
                <br />
                <div class="listTitle">Technical Skill : </div>
                <ul class="listItem">
                    <li>Labview</li>
                    <li>Xilinx</li>
                    <li>MATLAB</li>
                </ul>
            </div>
            <br />
            <div className="subheading">Certifications </div>
            <br />
            <div>Container Inspector : </div>
            <ul>
                <li>cleared IICL Container Inspector's 2019 fall Certiﬁcation exam. <br />IICL Certification number : 1008661</li>
            </ul>
            <br />
            <div>Cutshort Assesment : ( hint - click certificate ) </div>
            <ul>
                <li><span>ReactJS &nbsp;: </span><a href="./22463.jpg" download>certificate_React</a></li>
                <li><span>Python &nbsp;&nbsp;: </span><a href="./22977.jpg" download>certificate_Python</a></li>
            </ul>
            <br />
            <div className="downdiv">
                <div className="subheading">Download Resume Here </div>
                <br />
                <a className="downbtn" href="./resume.pdf" download>download</a>
            </div>
        </div>
    );
}

const Content1 = () => {
    return (
        <div id="content1">
            <div id="about" className="subheading">Career Objective </div>
            <br />
            <div id="content">To be a part of an organization where I can fully utilize my skills in programming languages to make a signiﬁcant contribution to the success of the employer, while at the same time pursuing my individual growth. Seeking a challenging position as a developer in a well established company that offers professional growth and ample opportunity to learn.</div>
        </div>
    );
}

const Content2 = () => {
    return (
        <div id="content2">
            <div id="education" className="subheading">Education</div>
            <br />
            <table className="TableMain">
                <thead>
                    <tr>
                        <th>Year of Passing</th>
                        <th>Institution Name</th>
                        <th>Board</th>
                        <th>Percentage </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2018</td>
                        <td>SRM Institute of Science and Technology</td>
                        <td>SRM University</td>
                        <td>74.83%</td>
                    </tr>
                    <tr>
                        <td>2014</td>
                        <td>Chettinad Vidhyashram</td>
                        <td>CBSE</td>
                        <td>70.43%</td>
                    </tr>
                    <tr>
                        <td>2012</td>
                        <td>Kavi Bharathi Vidhyalaya</td>
                        <td>CBSE</td>
                        <td>86.00%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const Content3 = () => {
    return (
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

const Content4 = () => {
    return (
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

const Content5 = () => {
    return (
        <div id="content5">
            <div id="project" className="subheading">Projects</div>
            <br />
            <div> Built <strong>Self Driving Car</strong> using <strong>Python</strong> with <strong>Machine Learning and Image Processing</strong> which successfully navigated through model road and had ability to move according with the traﬃc signal and also had the ability to stop in presence of obstacles.</div>
            <br />
            <div >Working on <strong> Quickr Clone </strong>, using Nodejs and React , where user can Add Items for sale and other users can view it and contact them for buying </div>
            <br />
            <div> Made <strong>OMBD</strong> using API, where users can type their favourite movie name to get its details from IMBD </div>
            <br />
            <div> Made a <strong>New York Times Magazine</strong> using API to fetch current NEWS and Responsive for Mobile Devices</div>
        </div>
    );
}


const Left = () => {
    return (
        <div id="left">
            <IMG />
            <br />
            <Details />
            <br />
            <Skill />
        </div>
    );
}

const Right = () => {
    return (
        <div id="right">
            <Content1 />
            <br />
            <Content2 />
            <br />
            <Content3 />
            <br />
            <Content4 />
            <Content5 />
        </div>
    )
}
const Main = () => {
    return (
        <div id="main">
            <Left />
            <Right />
        </div>
    );
}

ReactDOM.render(<Main />, RootID);