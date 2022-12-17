import React from "react";

const MobileMenuContent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onClick={handleSubmit} className="search-form">
        <input type="text" placeholder="Search here.." />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </form>
      {/* End Search Form */}

      <div className="address-block">
        <h4 className="title">Our Address</h4>
        <p>
          Chowrastar Mirpur- 1210, Sangu <br />
          River, Dhaka
        </p>
        <p>
          Urgent issue? call us at <br />
          <a href="tel:310.841.5500">310.841.5500</a>
        </p>
      </div>
      {/* End .address-block */}
    </>
  );
};

export default MobileMenuContent;
