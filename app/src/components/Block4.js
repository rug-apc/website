import React from "react";
import question from "../photo/question.png";

const Block4 = () => {
  return (
    <div className="max-width">
      <div className="center">
        <p className="title-block1">F.A.Q.</p>
      </div>
      <div className="flex full max-width ">
        <div className="seventy">
          <p className="text-block1 bold">1. How to pass this course?</p>
          <p className="size24">
            The final grade that is given in this course is PASS or FAIL. A
            student is deemed to PASS the course provided by (i) attendance
            &gt;= 70% in lectures and computer labs, (ii) active participation
            in course assignments, (iii) participation in four course-approved
            contests with at least two problems solved in each (at least two of
            the contests must be individual contests).{" "}
          </p>
          <p className="text-block1 bold">
            2. Can I take this course as part of the minor/bachelor?
          </p>
          <p className="size24">
            {" "}
            No. This is an extracurricular course and so the credits gained do
            not count towards the 180 ECTS that is required to complete the
            Bachelor programme.{" "}
          </p>
          <p className="text-block1 bold">
            3. Who are the lecturers of this course?
          </p>
          <p className="size24">
            The coordinator of the course is D.R.S. Ramanayake and D. Feitosa
            will be lecturer. There will also be guest lecturers from within and
            outside of RUG.
          </p>
          <p className="text-block1 bold">
            4. Is this course open to all students?
          </p>
          <p className="size24">
            Yes, although a primary target is 2nd year students. Also note that
            there is a cap of 30 students.
          </p>
          <p className="text-block1 bold">
            5. Can this course be added to my student record?
          </p>
          <p className="size24">Yes!</p>
          <p className="text-block1 bold">
            6. What is BAPC 2023?
          </p>
          <p className="size24"> This is the 2023 edition of the algorithmic programming contest involving university teams of three persons from Belgium, the Netherlands, and Luxembourg (BeNeLux). The tentative date for the contest is the 28th October 2023. Selection for the BAPC 2023 is via the BAPC 2023 Preliminary (tentative date: 23rd September). Students in the APC course are expected to participate in the BAPC Preliminary, and BAPC 2023 (if their team is selected), so please reserve these dates. </p>
          <p className="text-block1 bold">
            7. What is a course-approved external contest?
          </p>
          <p className="size24">
            Any contest that is pre-approved by the course coordinator as eligible. Such contests may include those organised by the ICPC, such as BAPC preliminary, BAPC finals and NWERC (Northwestern Europe Regional Contest) or organised by the Fully Connected Graph committee. We will also consider the option of pre-approving selected other online contests e.g. from CodeForces or CodeChef. Specific details will be provided in due course.
          </p>
       
        </div>
        <div className="center thirty">
          <img className="photo-B4" src={question} alt="question"></img>
        </div>
      </div>
    </div>
  );
};

export default Block4;
