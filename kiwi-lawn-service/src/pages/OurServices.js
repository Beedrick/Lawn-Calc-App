import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OurServices() {
  return (
    <div className="main-container">
      <h1 className="text-center text-success">Our Services</h1>
      <p className="text-center">
        We provide professional lawn and garden maintenance services to keep your outdoor spaces clean and well-maintained.
      </p>

      <div className="container">
        <div className="row">
          {/* Lawn Mowing */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h3 className="text-success">Lawn Mowing</h3>
              <p>
                Our professional mowing service ensures your grass is cut to an optimal height, promoting healthy growth. 
                Edging along driveways, walkways, and garden beds is included. Small debris like leaves and minor trash 
                will be removed as part of this service.
              </p>
            </div>
          </div>

          {/* Hedge and Tree Trimming */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h3 className="text-success">Hedge and Tree Trimming</h3>
              <p>
                We trim and shape hedges and small trees to maintain a neat and healthy appearance. This helps improve 
                sunlight exposure and plant growth. (Note: Large tree removals are not included but we can refer trusted arborists.)
              </p>
            </div>
          </div>

          {/* Rubbish Removal */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h3 className="text-success">Rubbish Removal (Big Clean-Ups Only)</h3>
              <p>
                We remove large amounts of green waste, fallen branches, and old garden furniture. 
                This service is ideal for seasonal cleanups, post-storm cleanups, or pre-sale garden makeovers. 
                (Smaller debris is covered under Lawn Mowing.)
              </p>
            </div>
          </div>

          {/* Gardening Services */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h3 className="text-success">Gardening Services</h3>
              <p>
                We clear overgrown areas, remove weeds, and cut down unwanted plants. 
                This service is perfect for customers looking to reclaim their outdoor space without needing 
                full landscaping services. (We do not install new turf or irrigation systems.)
              </p>
            </div>
          </div>

          {/* Water Blasting */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h3 className="text-success">Water Blasting (High-Pressure Cleaning)</h3>
              <p>
                Our high-pressure water blasting service removes built-up dirt, moss, and mildew from driveways, patios, 
                decks, and pathways—restoring surfaces and enhancing curb appeal.
              </p>
            </div>
          </div>

          {/* Yard Cleaning */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-3">
              <h3 className="text-success">Yard Cleaning (Seasonal and Pre-Sale Clean-Ups)</h3>
              <p>
                Ideal for homeowners preparing to sell their property or looking for a general refresh. 
                This service includes thorough green waste removal, trimming, and general tidying up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
