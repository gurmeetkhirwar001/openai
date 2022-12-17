import React from "react";

const AddressBlock = () => {
  return (
    <div className="row g-0">
      <div className="col-md-6">
        <div className="address-block-two d-flex border-right">
          <img
            src={require("../../assets/images/icon/icon_34.svg").default}
            alt="icon"
            className="icon"
          />
          <div className="text-meta">
            <h4 className="title">Our Address</h4>
            <p>
              1012 Pebda Parkway, Mirpur 2 <br />
              Dhaka, Bangladesh
            </p>
          </div>
          {/* <!-- /.text-meta --> */}
        </div>
        {/* <!-- /.address-block-two --> */}
      </div>
      {/* End .col */}

      <div className="col-md-6">
        <div className="address-block-two d-flex">
          <img
            src={require("../../assets/images/icon/icon_35.svg").default}
            alt="icon"
            className="icon"
          />
          <div className="text-meta">
            <h4 className="title">Contact Info</h4>
            <p>
              Open a chat or give us call at <br />
              <a href="#">310.841.5500</a>
            </p>
          </div>
          {/* <!-- /.text-meta --> */}
        </div>
        {/* <!-- /.address-block-two --> */}
      </div>
    </div>
  );
};

export default AddressBlock;
