import React from 'react'
import "./home.css"
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';

const Home = () => {
    return (
        <>
            <div className="mainContainer">
            <div className="container">
                <div className="left">
                    <div className="search">
                    <SearchIcon/>
                    </div>
                    <h4>Find the best answer to your technical question, help others answer theirs</h4>
                    <button className='btn'>Join the community</button> 
                    <br />
                    <span className='rightsp'>or search content</span>
                </div>
                <div className="right">
                    <div className="search">
                    <LockIcon/>
                    </div>
                    <h4>Want a secure, private space for your technical knowledge?</h4>
                    <span className='sp'>Get started</span>
                    <div className="right-1">
                        <button className='rightbtn1'>For large organisations</button>
                        <button className='rightbtn2'>For small teams</button>
                    </div>
                </div>
            </div>
            <div className="heading">
            <h2>Every <span>data scientist</span> has a tab open to Stack Overflow</h2>
            </div>
            </div>
        </>
    )
}

export default Home
