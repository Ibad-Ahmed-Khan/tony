import React from "react";
import Slider from "react-slick";

// Team member data
// Team member data with unique placeholder images
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
  {
    name: "Sara Lee",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
  {
    name: "James Brown",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
  {
    name: "Emily White",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
  {
    name: "Chris Green",
    role: "Project Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
  {
    name: "Olivia Black",
    role: "HR Manager",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
  },
];

const Team = () => {
  // Slick Slider settings with custom arrows
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>,
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
    <div className="team-container m-4 logo-text">
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
