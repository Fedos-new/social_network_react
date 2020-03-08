import React from 'react';
import './App.css';

class App extends React.Component {
    render = () => {
        return (
            <div className="app-wrapper">
                <header className='header'>
                    <img src="https://purepng.com/public/uploads/medium/angry-birds-game-vs3.png"></img>
                </header>
                <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messeges</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
                </nav>
                <div className='content'>
                    <img src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/36/4f/c4/shutterstock-239392108.jpg"/>

                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        new post
                    </div>
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default App;

