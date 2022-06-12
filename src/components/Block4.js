import React from 'react';
import question from '../photo/question.png';

const Block4 = () => {

    return (
        <div className="max-width">
            <div className="center">
                <p className='title-block1'>F.A.Q.</p>
            </div>
            <div className='flex full max-width '>

                <div className='seventy'>
                    <p className='text-block1 bold'>1. How to pass this course?</p>
                    <p className='size24'> This is a PASS or FAIL course and in order to pass it, you need to attend at 80%
                    of the lectures, 80% of the labs and 4  course-approved contests with at least 2 problems solved in each (at 
                    least 2 of the contests must be individual contests). Moreover, the homework is optional and it does not count 
                    towards passing or failling the course. </p>

                    <p className='text-block1 bold'>2. Can I take this course as part of the minor/bachelor?</p>
                    <p className='size24'> No, because this is an extracurricular course and the credits gained do not count towards 
                    the mandatory 180 ECTS to complete the Bachelor programme. </p>

                    <p className='text-block1 bold'>3. Who are the lecturers of this course?</p>
                    <p className='size24'> The coordinator of the course is D.R.S. Ramanayake and D. Feitosa will be lecturer. There 
                    will also be guest lecturers from within and outside of RUG  </p>

                    <p className='text-block1 bold'>4. What is a course-approved contest?</p>
                    <p className='size24'>A contest that is approved by the course. Such contests may include contests that are part 
                    of the ICPC organisation, or organised by the Fully Connected Graph committee. We will also explore the option 
                    to consider other online contests such as the ones from CodeForces or CodeChef if they are pre-approved by the 
                    course coordinator. More details will be provided shortly. </p>

                </div>
                <div className='center thirty'>
                    <img className='photo-B4' src={question} alt='question'></img>
                </div>
            </div>
        </div>
    )
};

export default Block4;