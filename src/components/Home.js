import LinkedinLogo from '../images/linkedin-logo.png'
import GithubLogo from '../images/github-logo.png'
import MediumLogo from '../images/medium-logo.png'
import HtmlLogo from '../images/html-logo.png'
import CssLogo from '../images/css-logo.png'
import ReactLogo from '../images/react-logo.png'
import RailsLogo from '../images/rails-logo.png'


function Home() {

    return (
        <div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="home-links-container">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/bsmith81620/">
                                <img src={LinkedinLogo} alt="linkedin logo" className="social-links" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/bsmitty815">
                                <img src={GithubLogo} alt="Github logo" className="social-links" />
                            </a>
                        </li>
                        <li>
                            <a href="https://bsmitty.medium.com/">
                                <img src={MediumLogo} alt="Medium logo" className="social-links" />
                            </a>

                        </li>
                    </ul>
                    </div>
                
                </div>
                <div className="col-2-of-3">
                    <div className="home-right-box-container"> 
                        <h1>Key Skills</h1>
                        <p>Javascript | React | HTML | CSS | Ruby On Rails | Business to Business Sales | Business to Consumer Sales </p>
                        <p>Up-Selling Strategies | Marketing| Customer Education| Creative Problem Solving </p>
                        <h1>About Me</h1>
                        <p>I enjoy exercising, watching Premier League soccer, and spending time with friends and family. </p>
                    </div>
                </div>
            </div>
            <div className="home-logo-links-container">
                <div className="row">
                    <div className="col-1-of-4">
                        <img src={HtmlLogo} alt="html" className="logo-links" />
                    </div>
                    <div className="col-1-of-4">
                        <img src={ReactLogo} alt="react" className="logo-links" />
                    </div>
                    <div className="col-1-of-4">
                        <img src={CssLogo} alt="css" className="logo-links" />
                    </div>
                    <div className="col-1-of-4">
                        <img src={RailsLogo} alt="rails" className="logo-links" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home