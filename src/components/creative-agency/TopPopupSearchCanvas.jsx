import React from "react";

const TopPopupSearchCanvas = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <button
        className="menu-search-btn tran3s"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        <i className="bi bi-search"></i>
      </button>
      {/* End menu-search-btn */}

      {/* Start  Search popup click above button */}
      <div
        className="offcanvas offcanvas-top theme-search-form justify-content-center"
        tabIndex="-1"
        id="offcanvasTop"
      >
        <button
          type="button"
          className="close-btn tran3s"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="bi bi-x-lg"></i>
        </button>
        {/* End .close button */}

        <div className="form-wrapper">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Search Keyword...." />
            <button>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- /.form-wrapper --> */}
      </div>
      {/* End  Search popup click above button */}
    </>
  );
};

export default TopPopupSearchCanvas;
