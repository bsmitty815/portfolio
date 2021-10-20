import LinkedinLogo from '../images/linkedin-logo.png'
import GithubLogo from '../images/github-logo.png'
import MediumLogo from '../images/medium-logo.png'

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
                    <div className="home-right-container">
                        <p>
                        Coming Soon
                        </p>    

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home