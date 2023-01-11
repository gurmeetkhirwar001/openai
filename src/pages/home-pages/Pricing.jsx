import React from "react";
import Home from "../../assets/images/icon/home.png";
import Professional from "../../assets/images/icon/profess.png";
import Business from "../../assets/images/icon/business.png";
import Seo from "../../components/common/seo/Seo";

import Header from "../../components/creative-agency/Header";
import { useDispatch, useSelector } from "react-redux";
import { CreateOrder, VerifyOrder } from "../../redux/actions/paymentAction";
import useRazorpay from "react-razorpay";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../redux/actions/userAction";
import Check from "../../assets/images/icon/check.png";
import Cross from "../../assets/images/icon/cross.png";

const Pricing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Razorpay = useRazorpay();
  const { userdetail } = useSelector((state) => state.user);
  const HandleOrder = async (amount) => {
    const orderresponse = await dispatch(CreateOrder({ amount }));
    console.log(process.env.REACT_APP_KEY_ID);
    const options = {
      key: process.env.REACT_APP_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: orderresponse?.data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderresponse?.data?.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: async function (response) {
        const response2 = await dispatch(
          VerifyOrder({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: orderresponse?.data?.order_id,
            orderamount: amount,
          })
        );
        dispatch(GetUser());
        navigate("/use-cases");
        toast.success(response2?.data?.message);
      },
      prefill: {
        name: userdetail?.firstName,
        email: userdetail?.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };
  return (
    <div className="main-page-wrapper light-bg">
      <ToastContainer />
      <Seo title="Pricing" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Theme Main Menu
      ============================================== 
      --> */}
      <Header />

      <div className="price-div mt-140">
        <h3 className="text-center fw-bold  pt-40">Pricing plans</h3>
        <p className="text-center mt-20">
          Every plan includes 5 demo runs as free trial
        </p>
        <div className="container mt-60">
          <diuv className="row">
            <div className="col-sm-12 col-md-3 mt-4">
              <div class="card">
                <div class="card-body">
                  <div className="text-center">
                    <h3 className="fw-bold pt-20">Solo</h3>
                    <p className="pt-10">For your personal brand</p>
                  </div>

                  <h3 class="card-title text-center fw-bold mt-40">
                    $29.9/month
                  </h3>
                  <p class="card-text mt-20 text-center">
                   Billed Monthly
                  </p>
                  <div className="border-bottom "></div>
                  <ul className="price-list">
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">70 runs/month</div>
                      </div>
                    </li>

                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Basic Support</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Cross} height={30} width={30} />
                        <div className="ms-1">Access to beta features</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    class="btn-class btn btn-light p-4 mt-4 fw-bold"
                    onClick={() => HandleOrder(10)}
                  >
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 mt-4">
              <div class="card">
                <div class="card-body">
                  <div className="text-center">
                    <h3 className="fw-bold pt-20">Startup</h3>
                    <p className="pt-10">For small marketing teams</p>
                  </div>

                  <h3 class="card-title text-center fw-bold mt-40">
                    $49.9 /month
                  </h3>
                  <p class="card-text mt-20 text-center">Billed monthly</p>
                  <div className="border-bottom "></div>
                  <ul className="price-list">
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">100 runs/month</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Basic Support</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Cross} height={30} width={30} />
                        <div className="ms-1">Access to beta features</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    class="btn-class btn btn-light p-4 mt-4 fw-bold"
                    onClick={() => HandleOrder(10)}
                  >
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 mt-4">
              <div class="card">
                <div class="card-body">
                  <div className="text-center">
                    <h3 className="fw-bold pt-20">Enterprise</h3>
                    <p className="pt-10">For large marketing teams</p>
                  </div>

                  <h3 class="card-title text-center fw-bold mt-40">
                    $119.9/month
                  </h3>
                  <p class="card-text mt-20 text-center">Billed Monthly</p>
                  <div className="border-bottom "></div>
                  <ul className="price-list">
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">250 runs/month</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Priority Support</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Access to beta features</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    class="btn-class btn btn-light p-4 mt-4 fw-bold"
                    onClick={() => HandleOrder(10)}
                  >
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 mt-4">
              <div class="card">
                <div class="card-body">
                  <div className="text-center">
                    <h3 className="fw-bold pt-20">Ultimate</h3>
                    <p className="pt-10">For businesses</p>
                  </div>

                  <h3 class="card-title text-center fw-bold mt-40">
                    $209.9 /month
                  </h3>
                  <p class="card-text mt-20 text-center">Billed Monthly</p>
                  <div className="border-bottom "></div>
                  <ul className="price-list">
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Unlimited runs/month</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Priority Support</div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">Access to beta features</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    class="btn-class btn btn-light p-4 mt-4 fw-bold"
                    onClick={() => HandleOrder(10)}
                  >
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
          </diuv>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
