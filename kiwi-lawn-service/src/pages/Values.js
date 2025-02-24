import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Values() {
  return (
    <div className="main-container">
      <h1 className="text-center text-success mb-4">Our Values</h1>
      <p className="text-center mb-5">
        At Kiwi Lawn Services, we take pride in delivering top-quality lawn and garden maintenance with a strong commitment to customer satisfaction, efficiency, and sustainability. Here’s what we stand for:
      </p>

      <div className="container">
        <div className="row g-4">
          {/* Integrity */}
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h3 className="text-success">Integrity</h3>
              <p>
                At Kiwi Lawn Services, we believe in honesty, transparency, and doing the right thing—every time. We provide fair pricing, clear communication, and reliable service, ensuring our customers can trust us to care for their property as if it were our own. No shortcuts, no hidden fees—just quality work done with integrity.
              </p>
            </div>
          </div>

          {/* Commitment to Excellence */}
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h3 className="text-success">Commitment to Excellence</h3>
              <p>
                We strive for the highest standard in everything we do, from precise lawn mowing to careful hedge trimming. Our goal is to leave every property looking immaculate, so our customers can take pride in their outdoor spaces.
              </p>
            </div>
          </div>

          {/* Hard Work & Diligence */}
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h3 className="text-success">Hard Work & Diligence</h3>
              <p>
                We approach every job with dedication and a strong work ethic, ensuring that no detail is overlooked. Whether it’s a small residential lawn or a large-scale property clean-up, we put in the effort to get the job done right.
              </p>
            </div>
          </div>

          {/* Customer-First Service */}
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h3 className="text-success">Customer-First Service</h3>
              <p>
                Your satisfaction is our priority. We take the time to understand your needs and tailor our services to meet them. Whether it’s a one-off job or regular maintenance, we ensure a seamless and professional experience.
              </p>
            </div>
          </div>

          {/* Efficient & Reliable Service */}
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h3 className="text-success">Efficient & Reliable Service</h3>
              <p>
                We respect your time. Our team works efficiently to complete each job without compromising on quality, ensuring minimal disruption to your day. We get in, do the job to the highest standard, and get out—leaving you with a clean, tidy lawn.
              </p>
            </div>
          </div>

          {/* Sustainable Lawn Care & Future Lawn Health */}
          <div className="col-md-4 mb-4">
            <div className="card shadow p-3 h-100">
              <h3 className="text-success">Sustainable Lawn Care & Future Lawn Health</h3>
              <p>
                A great lawn isn’t just about how it looks today—it’s about how healthy it stays in the future. We focus on sustainable practices that promote long-term lawn health, such as proper mowing techniques, thoughtful trimming, and green waste management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
