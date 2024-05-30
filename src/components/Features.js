import React from "react";

function Features() {
  return (
    <section className="py-4" id="features">
      <div className="container">
        <h1
          style={{ fontSize: "36px", fontWeight: "600",}}
          className="phenomena pb-4"
        >
          Fasilitas Sekolah
        </h1>
        <div className="container row">
          {/* Feature Cards */}
          <FeatureCard
            imageUrl="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg"
            title="Lorem Ipsum"
          />
          <FeatureCard
            imageUrl="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
            title="Lorem Ipsum"
          />
          <FeatureCard
            imageUrl="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
            title="Lorem Ipsum"
          />
          <FeatureCard
            imageUrl="https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg"
            title="Lorem Ipsum"
          />
        </div>
      </div>
    </section>
  );
}

// FeatureCard component
function FeatureCard({ imageUrl, title }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card feature-card shadow rounded-lg">
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body text-center py-3">
          <h5
            style={{ fontFamily: "Phenomena" }}
            className="card-title"
          >
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Features;