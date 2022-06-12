import React from 'react';

const Block2 = () => {

    return (
        <div className='center max auto max-width' >

            <div>
                <p className='title-block1'>Structure of the course 2022/23</p>
            </div>

            <div>
                <div className='max flex'>
                    <div className='box center'>
                        <div>
                            <p className='title-info red'>Block 1a</p>
                        </div>
                        <div className='block'>
                            <p className='description-info '>
                                <ul className='list'>
                                    <li> Lectures: 3-4</li>
                                    <li> Labs: 4</li>
                                    <li> Homework: 2 (optional)</li>
                                    <li>  Team contests: 3 (BAPC preliminary, BAPC final, Open contest)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='box center'>
                        <div>
                            <p className='title-info red'>Block 1b</p>
                        </div>
                        <div>
                            <p className='description-info block'>
                                <ul className='list'>
                                    <li> Lectures: 2</li>
                                    <li> Labs: 2</li>
                                    <li> Homework: 1 (optional)</li>
                                    <li> Team contests: 1 (NWERC)</li>
                                    <li> Individual contests: 1 (Open contest)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className='box' id='schedule'>
                        <div>
                            <p className='title-info red'>Block 2a</p>
                        </div>
                        <div>
                            <div className='block description-info' >
                                <ul className='list'>
                                    <li> Lectures: 2</li>
                                    <li> Labs: 2</li>
                                    <li> Homework: 1 (optional)</li>
                                    <li> Team contests: 0</li>
                                    <li> Individual contest: 2 (Open contests)</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Block2;