import LinkedinLogo from '../images/linkedin-logo.png'
import GithubLogo from '../images/github-logo.png'
import MediumLogo from '../images/medium-logo.png'
import HtmlLogo from '../images/html-logo.png'
import CssLogo from '../images/css-logo.png'
import ReactLogo from '../images/react-logo.png'
import RailsLogo from '../images/rails-logo.png'


function Home() {

    return (
        <div className="hom-container">
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
                        <h1>coming soon</h1>
                    </div>
                </div>
            </div>
            <div >
                <div class="row">
                    <div class="col-1-of-4">
                        <img src={HtmlLogo} alt="html" className="logo-links" />
                    </div>
                    <div class="col-1-of-4">
                        <img src={ReactLogo} alt="react" className="logo-links" />
                    </div>
                    <div class="col-1-of-4">
                        <img src={CssLogo} alt="css" className="logo-links" />
                    </div>
                    <div class="col-1-of-4">
                        <img src={RailsLogo} alt="rails" className="logo-links" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home