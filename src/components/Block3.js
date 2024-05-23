import React from 'react';

const Block3 = () => {

    return (
        <div className='center max auto max-width' >

            <div>
                <p className='title-block1' id="contact">Registration</p>
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
                                    <li>Email address of the course: apc@rug.nl</li>
                                    <li> Course co-ordinator: Revantha Ramanayake (d.r.s.ramanayake@rug.nl)</li>
                                    <li > Lecturer: Ivan Bliznets PhD (i.bliznets@rug.nl) </li>
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
                                Please read all the information displayed on the website and on Ocasys prior to registration. If you still
                                have questions, please send an email to the course email address.
                                <br></br>
                                <br></br>
                                Note that there is a cap of 30 students so this course is only accessible to students who have been selected.
                                For this reason, please mention all relevant experience when completing the registration form. (Deadline: 21 July)
                                <div className='center'>
                                    <button className='button'><a href='https://forms.gle/WWbDu3ne61Su3FNJA' target="_blank" rel="noreferrer">Register</a></button>
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
                                    Link to the Ocasys page containing up-to-date information on the course.
                                    <br></br>
                                    <br></br>
                                    Make sure to select the academic year 2024/25 when viewing this course on Ocasys.
                                </p>
                                <div className='center'>
                                    <button className='button'><a href='https://ocasys.rug.nl/2024-2025/catalog/course/WBCS045-05' target="_blank" rel="noreferrer">Ocasys</a></button>
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