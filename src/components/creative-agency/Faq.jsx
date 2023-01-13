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
                  What is Answergenie and how it works?
                </button>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Answergenie is a company that has built an AI model on top
                    of GPT-3, which has been fine-tuned on custom datasets for
                    various applications. The company has just released its
                    newest AI model, a text-based AI system designed to predict
                    human behaviour. This uses Natural Language Processing (NLP)
                    techniques, which means it evaluates formal grammatical
                    structures to learn language.
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
                  How do you get the best content/code?
                </button>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                  Enter your question and hit the submit button to obtain precise answers. There are examples for each use case, you can refer to them if you have any issues.

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
                  <p>
                  Please email to <a href="">hello@answergenie.co</a>
                  </p>
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
