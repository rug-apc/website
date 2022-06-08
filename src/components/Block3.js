import React from 'react';

const Block3 = () => {

    return (
        <div className='center max auto max-width' >

            <div>
                <p className='title-block1'>Registration</p>
            </div>

            <div>
                <div className='max flex'>
                    <div className='box center'>
                        <div>
                            <p className='title-info red'>Contact</p>
                        </div>
                        <div className='block'>
                            <p className='description-info'>
                                <ul className='list'>
                                    <li> Email adress of the course: programming_committee@svcover.nl</li>
                                    <li> Discord: <a className='red' href="https://discord.gg/JfzxyBHPsH" target="_blank">link</a></li>
                                    <li> D.R.S. (Revantha) Ramanayake: d.r.s.ramanayake@rug.nl</li>
                                    <li id="contact"> D. (Daniel) Feitosa: d.feitosa@rug.nl </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='box center'>
                        <div>
                            <p className='title-info red'>Registration</p>
                        </div>
                        <div>
                            <p className='description-info block'>
                                Before registering, please read all the information displayed on the webiste
                                and on Ocasys. Moreover, if you still have questions about the course, ask one of
                                the people responsible for the course.
                                <br></br>
                                <br></br>
                                In the end, when completing the form, try to add all the relevant experience that you
                                have for each section. Be aware, there are only 30 available spots in the course.
                                <div className='center'>
                                    <button className='button'><a href='https://forms.gle/wqYZVimQqW9LnH1c9' target="_blank" >Register</a></button>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className='box' id='schedule'>
                        <div>
                            <p className='title-info red'>Ocasys</p>
                        </div>
                        <div>
                            <div className='block description-info' >
                                <p>
                                   This is the link to the Ocasys page of the course Algorithmic Programming Contests.
                                </p>
                                <div className='center'>
                                    <button className='button'><a href='https://www.rug.nl/ocasys/fwn/vak/show?code=WBCS045-05' target="_blank" >Ocasys</a></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Block3;