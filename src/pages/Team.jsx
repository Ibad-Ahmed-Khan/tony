import React from "react";
import Slider from "react-slick";

// Team member data
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://via.placeholder.com/150", // Replace with real image URLs
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  {
    name: "Sara Lee",
    role: "Marketing Manager",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  {
    name: "James Brown",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
  {
    name: "Emily White",
    role: "Product Manager",
    image: "https://via.placeholder.com/150", // Replace with real image URL
  },
];

const Team = () => {
  // Slick Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team-container m-4">
      <h2 className="team-title">Meet Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-img"
              />
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
              <div className="team-member-overlay">
                <p className="team-member-bio">
                  {member.name} is an expert in their field, bringing valuable
                  experience to the team.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
