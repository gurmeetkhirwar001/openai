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
import { useState } from "react";
import Modal from "react-responsive-modal";
import Payment from "./payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Pricing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Razorpay = useRazorpay();
  const [open, setOpen] = useState(false);
  const [intentmessage, setintentmessage] = useState(false);
  const [paysecrete, setPayscerete] = useState("");
  const { userdetail } = useSelector((state) => state.user);
  useEffect(() => {
    async function handleVerifypayment() {
      if (window.location.href.includes("payment_intent")) {
        const intentid = window.location.href
          .split("?")[1]
          .split("&")[0]
          .split("=")[1];
        const response = await dispatch(VerifyOrder({ pid: intentid }));
        console.log(response);
        if (response.message === "Request Purchased Successfully") {
          setintentmessage(true);
          setOpen(true);
        }
      }
    }
    handleVerifypayment();
  }, []);
  const HandleOrder = async (params) => {
    const response = await dispatch(
      CreateOrder({
        amount: params.amount,
        name: params.name,
        customername: userdetail.firstName,
      })
    );
    console.log(response.info.client_secret, "response");
    setPayscerete(response.info.client_secret);
    if (response.info.client_secret) {
      setOpen(true);
    }
  };
  return (
    <div className="main-page-wrapper light-bg">
      <ToastContainer />
      <Seo title="Pricing" />
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
                    $19.9/month
                  </h3>
                  <p class="card-text mt-20 text-center">Billed Monthly</p>
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
                    onClick={() =>
                      HandleOrder({
                        amount: 19.9,
                        name: "Solo",
                      })
                    }
                  >
                    Try Now
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
                    $39.9 /month
                  </h3>
                  <p class="card-text mt-20 text-center">Billed monthly</p>
                  <div className="border-bottom "></div>
                  <ul className="price-list">
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">130 runs/month</div>
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
                    onClick={() =>
                      HandleOrder({
                        amount: 39.9,
                        name: "Startup",
                      })
                    }
                  >
                    Try Now
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
                    $89.9/month
                  </h3>
                  <p class="card-text mt-20 text-center">Billed Monthly</p>
                  <div className="border-bottom "></div>
                  <ul className="price-list">
                    <li>
                      <div className="d-flex justify-content-center align-items-center ">
                        <img src={Check} />
                        <div className="ms-1">350 runs/month</div>
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
                    onClick={() =>
                      HandleOrder({
                        amount: 89.9,
                        name: "Enterprise",
                      })
                    }
                  >
                    Try Now
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
                    $139.9 /month
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
                    onClick={() =>
                      HandleOrder({
                        amount: 139.9,
                        name: "Ultimate",
                      })
                    }
                  >
                    Try Now
                  </button>
                </div>
              </div>
              <Modal open={open} onClose={() => setOpen(false)}>
                {intentmessage ? (
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img src={Check} />
                    <br />
                    <p>
                      Payment Received SuccessFully! Request Balance is Updated
                    </p>
                    <br />
                    <button
                      class="btn-class btn btn-light  mt-4 fw-bold"
                      onClick={() => {
                        setOpen(false);
                        navigate("/use-cases");
                      }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <Elements
                    stripe={stripePromise}
                    options={{
                      clientSecret: paysecrete,
                    }}
                  >
                    <Payment />
                  </Elements>
                )}
              </Modal>
            </div>
          </diuv>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
