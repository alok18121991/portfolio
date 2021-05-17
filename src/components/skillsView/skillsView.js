import React from 'react';
import coding from '../../svg/code.svg'
import db from '../../svg/db.svg'
import framework from '../../svg/framework.svg'
import tools from '../../svg/tools.svg'
import java from '../../svg/java.svg'
import js from '../../svg/javascript.svg'
import htmlLogo from '../../svg/htmlLogo.svg'
import cssLogo from '../../svg/cssLogo.svg'
import mysql from '../../svg/mysql.svg';
import mssql from '../../svg/mssql.svg';
import mongo from '../../svg/mongo.svg';

class Skills extends React.Component {
    render() {
        return (
            <div className="App-header bg-light">
                <div className="content container pt-5">

                    <div className="row skillSet">
                        <div className="col-12 skill-head">
                            <span>
                                <h2> <img src={coding} alt="Coding icon"></img>
                            Language</h2>
                            </span>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div>
                                        <span>
                                            <img src={java} alt="Java icon"/><br />JAVA</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span><img src={js} alt="Javascript icon"/><br />Javascript</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span><img src={htmlLogo} alt="HTML icon"/><br />HTML</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span><img src={cssLogo} alt="CSS icon"/><br />CSS</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row skillSet">
                        <div className="col-12 skill-head">
                            <span>
                                <h2> <img src={db} alt="Databse icon"></img>
                            database</h2>
                            </span>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span><img src={mssql} alt="MS SQL icon"/><br />MS SQL</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span><img src={mysql} alt="mySQL icon"/><br />mySQL</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span><img src={mongo} alt="mongoDB icon"/><br />mongoDB</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row skillSet">
                        <div className="col-12 skill-head">
                            <span>
                                <h2> <img src={framework} alt="Frameworks icon"></img>
                            frameworks</h2>
                            </span>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>Spring Boot</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>Bootstrap</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>React</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>Kafka</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>Redis</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row skillSet">
                        <div className="col-12 skill-head">
                            <span>
                                <h2> <img src={tools} alt="Tools icon"></img>
                            tools</h2>
                            </span>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>git</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="skill">
                                <div class='square-box'>
                                    <div class='square-content'><div><span>tomcat</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;