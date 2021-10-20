import SoccerTalkImage from '../images/soccer-talk.png'
import MeSocialImage from '../images/me-social.png'
import TradingCardsImage from '../images/trading-cards.png'
import NintendoCharactersImage from '../images/nintendo-characters.png'
import RandomDogsImage from '../images/random-dogs.png'

function RecentWork() {

    return (
        <div className="recent-work">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="feature-app">
                        <div className="feature-app--feature-box">
                            <h3 className="heading-work">
                            Soccer Talk
                            </h3>
                            <p className="paragraph">
                            Soccer Talk is a forum where you can read through different discussions about Soccer. You an also create your own account so that you can create your own discussions and comment on other users discussions.
                            </p>
                            <a href="https://github.com/bsmitty815/soccer-talk" className="btn btn--white">Github</a>
                        </div> 
                    </div> 
                </div>
                <div className="col-1-of-2">
                    <div className="app-image-box">
                    <img src={SoccerTalkImage} alt="soccer talk" className="app-image" />
                    </div>
                    
                </div>
                
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="feature-app">
                        <div className="feature-app--feature-box">
                            <h3 className="heading-work">
                            Me Social
                            </h3>
                            <p className="paragraph">
                            This app allows you to signup and create a profile. You can upload an avatar, write a bio, write a status, and add an image path to your profile. You can also look at other users profiles that are signed up to the app.
                            </p>
                            <a href="https://github.com/bsmitty815/social-page" className="btn btn--white">Github</a>
                        </div>
                    </div>

                </div>
                <div className="col-1-of-2">
                    <div className="app-image-box">
                        <img src={MeSocialImage} alt="me social" className="app-image" />
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="feature-app">
                        <div className="feature-app--feature-box">
                            <h3 className="heading-work">
                            Trading Card Database
                            </h3>
                            <p className="paragraph">
                            This app allows you to add your trading cards to a database and display them on a url. You can give you card an image, name, year, description, and collection. There is a search bar that allows you to search by the name. 
                            </p>
                            <a href="https://github.com/bsmitty815/trading-card-collection" className="btn btn--white">Github</a>
                        </div>
                    </div>
                    
                </div>
                <div className="col-1-of-2">
                    <div className="app-image-box">
                        <img src={TradingCardsImage} alt="trading cards" className="app-image" />
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="feature-app">
                        <div className="feature-app--feature-box">
                            <h3 className="heading-work">
                            Nintendo Characters
                            </h3>
                            <p className="paragraph">
                            This app shows you all different Nintendo characters from different Nintendo games. You can click on the games tab and see all the different games and then from there you can click through each game to see what characters are in the game. There is also a form page where you can add your own image of a character from a the game of your choosing.
                            </p>
                            <a href="https://github.com/bsmitty815/nintendo-games-and-characters" className="btn btn--white">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="app-image-box">
                        <img src={NintendoCharactersImage} alt="nintendo characters" className="app-image" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="feature-app">
                        <div className="feature-app--feature-box">
                            <h3 className="heading-work">
                            Random Dogs
                            </h3>
                            <p className="paragraph">
                            This app allows you to click through random dog pictures random breed or by breed. You can select which dog pictures are your favorite and add them to your favorites list. If you like the dog picture you can add the dog picture to your favorite dogs list.
                            </p>
                            <a href="https://github.com/bsmitty815/random-dogs" className="btn btn--white">Github</a>
                        </div>
                    </div>     
                </div>
                <div className="col-1-of-2">
                    <div className="app-image-box">
                        <img src={RandomDogsImage} alt="random dogs" className="app-image" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RecentWork