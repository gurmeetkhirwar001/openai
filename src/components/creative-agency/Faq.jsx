import React from "react";

const Faq = () => {
  return (
    <>
      {/* End .col */}

      <div className="col-xl-12 col-lg-12 ms-auto faq-main-body">
        <div className="clearfix">
          <div className="accordion accordion-style-two" id="accordionTwo">
            <div className="accordion-item">
              <div className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  What is GPT-3 and how does it work?
                </button>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    OpenAI is a non-profit research company established by Elon
                    Musk, Sam Altman and others to develop and research advanced
                    artificial intelligence technology. The company recently
                    released their newest research project named GPT-3, an AI
                    based system designed to predict human behavior based off of
                    text. This uses techniques from Natural Language Processing
                    (NLP) which means it’s looking at formal grammatical
                    structures in order to learn language.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  How do you get the best SQL queries?
                </button>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    With AI2sql, you can simply write what you want the query to
                    do and get the best result with tables and data.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  What if I have other questions?
                </button>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>DM me on Twitter 👉🏻 https://twitter.com/mustafaergisi</p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}

          {/* <!-- /.accordion-style-two --> */}
        </div>
      </div>
    </>
  );
};

export default Faq;
