import React from "react";
import analytic from "../images/Capture-1-removebg-preview.png";
import fire from "../images/image-7-removebg-preview.png";
import spec from "../images/image-6-removebg-preview.png";
import love from "../images/image-5-removebg-preview.png";
import phone from "../images/image-4-removebg-preview.png";

const Body = () => {
  return (
    <section className="body-section">
      <div className="container">
        <div className="analytic">
          <div className="analytic-container">
            <img src={analytic} alt="analytic" />
            <h4>analytics</h4>
          </div>
          <footer>
            <p>
              Monitor your business in real time. See the top-selling products
              to maximise sales and profit. No setup needed.
            </p>
          </footer>
        </div>
        <div className="phone">
          <div className="gen-container">
            <div className="gen-div">
              <div className="emoji-spec">
                <img src={spec} alt="emoji with spec" />
                <h4>trusted shops</h4>
              </div>
              <footer>
                <p>
                  Shops are publicly reviewed by customers. They better your
                  service, the higher your rating.
                </p>
              </footer>
            </div>
            <div className="mobile-phone">
              <img src={phone} alt="phone" />
            </div>
            <div className="emoji-love">
              <div>
                <img src={love} alt="emoji" />
                <h4>follow shops</h4>
              </div>
              <footer>
                <p>
                  Get to follow your favorite business and get up-to-date with
                  their latest products, deal & promos
                </p>
              </footer>
            </div>
          </div>
        </div>

        <div className="refer">
          <div className="refer-img">
            <img src={fire} alt="refer" />
            <h4>referrals</h4>
          </div>

          <footer>
            <p>
              Turn your customers into loyal fans. Through Grow your reach to
              more people through referrals by your loyal customers.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Body;
