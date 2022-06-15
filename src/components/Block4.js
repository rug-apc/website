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
                    <p className='size24'> This is a PASS or FAIL course. In order to pass, you need to attend at 80%
                        of the lectures, 80% of the labs and 4 course-approved contests with at least 2 problems solved in each (at
                        least 2 of the contests must be individual contests). The homework is optional and does not count
                        towards passing or failling the course. </p>

                    <p className='text-block1 bold'>2. Can I take this course as part of the minor/bachelor?</p>
                    <p className='size24'> No. This is an extracurricular course and so the credits gained do not count towards
                        the 180 ECTS that is required to complete the Bachelor programme. </p>

                    <p className='text-block1 bold'>3. Who are the lecturers of this course?</p>
                    <p className='size24'> The coordinator of the course is D.R.S. Ramanayake and D. Feitosa will be lecturer. There
                        will also be guest lecturers from within and outside of RUG  </p>

                    <p className='text-block1 bold'>4. What is a course-approved contest?</p>
                    <p className='size24'>Any course that is pre-approved by the course coordinator as eligible. Such contests may
                        include those organised by the ICPC, or organised by the Fully Connected Graph committee. We will also consider
                        the option to consider of pre-approving selected other online contests e.g. from CodeForces or CodeChef. Specific details will 
                        be provided in due course.
                    </p>
                    <p className='text-block1 bold'>5. Is this course open to all students?</p>
                    <p className='size24'>Yes, although a primary target is 2nd year students from the BSc Computing science. Also note that there is 
                    a cap of 20 students.
                    </p>

                </div>
                <div className='center thirty'>
                    <img className='photo-B4' src={question} alt='question'></img>
                </div>
            </div>
        </div>
    )
};

export default Block4;