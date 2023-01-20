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
  const HandleOrder = async (params) => {
    const orderresponse = await dispatch(
      CreateOrder({
        amount: params.amount,
        name: params.name,
        firstName: userdetail?.firstName,
        email: userdetail?.email,
        phone: userdetail?.phone,
      })
    );
    console.log(orderresponse.info);
    const htmlSTRING = `<html>
  <body>
    <form action="${orderresponse.info.payu_url}" method="post" id="payu_form">
      <input type="hidden" name="firstname" value="${orderresponse.info.first_name}"/>
      <input type="hidden" name="email" value="${orderresponse.info.email}"/>
      <input type="hidden" name="phone" value="${orderresponse.info.mobile}"/>
      <input type="hidden" name="surl" value="${orderresponse.info.callback_url}"/>
      <input type="hidden" name="curl" value="${orderresponse.info.payu_cancel_url}"/>
      <input type="hidden" name="furl" value="${orderresponse.info.payu_fail_url}"/>
      <input type="hidden" name="key" value="${orderresponse.info.payu_merchant_key}"/>
      <input type="hidden" name="hash" value="${orderresponse.info.payu_sha_token}"/>
      <input type="hidden" name="txnid" value="${orderresponse.info.txnid}"/>
      <input type="hidden" name="productinfo" value="${orderresponse.info.plan_name}"/>
      <input type="hidden" name="amount" value="${orderresponse.info.amount}"/>
      <input type="hidden" name="service_provider" value="${orderresponse.info.service_provider}"/>
      <input name="udf1" input type= "hidden" value="${orderresponse.info.udf1}"/>
      <button type="submit" value="submit" #submitBtn></button>
    </form>
    <script type="text/javascript">document.getElementById("payu_form").submit();</script>
  </body>
</html>`;
    const winUrl = URL.createObjectURL(
      new Blob([htmlSTRING], { type: "text/html" })
    );

    window.location.href = winUrl;
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
