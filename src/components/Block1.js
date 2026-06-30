import logo from "../photo/competition.png";

const Block1 = () => {
  return (
    <div className="max-width">
      <div className="center flex">
        <p className="title-block1 b1">Course description</p>
        <p className="warning">
          Please register as soon as possible; enrolments submitted by 12 July
          2026 will receive full consideration although it may be possible to
          register up to the end of the first week of block 1a.
        </p>
      </div>
      <div className="flex">
        <div className="sixty">
          <p className="text-block1 small-margin">
            The Algorithmic Programming Contests course is a 5 ECTS
            extracurricular course providing students from the University of
            Groningen with an introduction to the world of programming contests
            through a mix of (guest) lectures, labs, and participation in
            individual and team contests. This course was introduced in
            2022-2023.
            <br></br>
            <br></br>
            The lectures will cover theory, algorithms, and various aspects of
            the contests. Some of the topics addressed in this course are:
            effective programming, matching problem classes with suitable
            solution strategies, dynamic programming, and the application of
            graph algorithms.
            <br></br>
            <br></br>
            The course is spread over three blocks, allowing the content of the
            lectures to be influenced by the needs of the students (e.g., in the
            case where a common content deficiency is identified) and to
            accommodate talks from renowned guest lecturers.
          </p>
        </div>
        <div className="forty">
          <img
            className="photo-B1"
            src={logo}
            alt="Art by Ilusiku Studio"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Block1;
