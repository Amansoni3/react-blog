import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h8 style={{ fontWeight: "bold", color: "Grey" }}>Meta Open Source</h8>
                    </div>
                    <div className="col">
                        <h8 style={{ fontWeight: "bold", color: 'Grey' }}>Learn React</h8>
                        <ul>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href='/'>Quick Start</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Installation</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Describing the UI</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Adding Interactivity</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Managing State</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Escape Hatches</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h8 style={{ fontWeight: "bold", color: 'Grey' }}>Api Refrences</h8>
                        <ul>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">React Api</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">React Dom Api</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h8 style={{ fontWeight: "bold", color: 'Grey' }}>Community</h8>
                        <ul>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Code of Conduct</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Meet the team</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Docs Conributor</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Acknowledgement</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h8 style={{ fontWeight: "bold", color: 'Grey' }}>More</h8>
                        <ul>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Blog</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">React Native</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Privacy</a></li>
                            <li style={{ marginBottom: "15px" }}><a style={{ color: "Grey" }} href="/">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer