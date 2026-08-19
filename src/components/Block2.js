import React from "react";

const Block2 = () => {
  return (
    <div className="center max auto max-width">
      <div>
        <p className="title-block1">Tentative structure of the course</p>
      </div>

      <div>
        <div className="max flex">
          <div className="box center">
            <div>
              <p className="title-info red">Block 1a</p>
            </div>
            <div className="block">
              <p className="description-info ">
                <ul className="list">
                 <li>
                  Lectures:
                    <ul>
                      <li><strong>07/09/26</strong> -- Introduction</li>
                      <li><strong>14/09/26</strong> -- Data Structures</li>
                      <li><strong>21/09/26</strong> -- Greedy</li>
                    </ul>
                  </li>
                    
                  <li> Labs:
                    <ul>
                      <li><strong>16/09/26</strong> -- Data Structures</li>
                      <li><strong>30/09/26</strong> -- Greedy</li>
                      <li><strong>07/10/26</strong> -- TCR Usage</li>
                    </ul>
                  </li>
                  <li>
                    Contests:
                    <ul><strong>19/09/26</strong> -- BAPC Prelims</ul>
                    <ul><strong>TBD</strong> -- BAPC</ul>
                    <ul><strong>12/10/26</strong> -- Internal Contest</ul>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="box center">
            <div>
              <p className="title-info red">Block 1b</p>
            </div>
            <div>
              <p className="description-info block">
                <ul className="list">
                  <li> Lectures:
                    <ul>
                      <li><strong>11/11/26</strong> -- TBD</li>
                      <li><strong>02/12/26</strong> -- TBD</li>
                      <li><strong>16/12/26</strong> -- TBD</li>
                    </ul>

                  </li>
                  <li> Labs:
                    <ul>
                      <li><strong>18/11/26</strong> -- TDB</li>
                      <li><strong>04/12/26</strong> -- TBD</li>
                      <li><strong>18/12/26</strong> -- TBD</li>
                    </ul>
                  </li>
                  <li> Contests:
                    <ul>
                      <li><strong>25/11/26</strong> -- Internal Contest</li>
                      <li><strong>27-29/11/26</strong> -- NWERC</li>
                      <li><strong>09/12/26</strong> -- Internal Contest</li>
                      <li><strong>06/01/26</strong> -- Internal Contest</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="box" id="schedule">
            <div>
              <p className="title-info red">Block 2a</p>
            </div>
            <div>
              <div className="block description-info">
                <ul className="list">
                  <li> Lectures: 2</li>
                  <li> Labs: 1</li>
                  <li> Team contests: 0</li>
                  <li> Individual contest: 2 (Internal contests)</li>
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
