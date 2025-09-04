import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./navbar/Header";
import Footer from "./navbar/Footer";
import MenuBar from "./navbar/MenuBar";
import Parallax from "./Parallax";
import HeaderParallax from "./HeaderParallax";
import conference from "../assets/images/conference-wide.jpg";

import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import gideon from "../assets/images/team/team-gideon.png";
import gideon2 from "../assets/images/team/team-gideon2.png";

import nix from "../assets/images/team/nix.png";
import hardy from "../assets/images/team/hardy.png";
import vara from "../assets/images/team/vara.png";
import tom from "../assets/images/team/tom.png";
import team from "../assets/images/team/team.png";

import background from "../assets/images/background.png";

import { useParams } from 'react-router-dom';

export default function TeamMemberPage({
  isMobile,
  isMenuOpen,
  toggleMenu,
  closeMenu,
}) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const { name } = useParams();

  // Define your team members data (could also come from API or external file)
  const teamMembers = [
    {
      slug: 'gideon-egbuchulam',
      name: 'Gideon Egbuchulam',
      image: gideon,
      position: "Chairman/Chief Executive Officer".toUpperCase(),
      description: 'Mr. Egbuchulam has developed solutions to many of Nigeria’s infrastructure needs and by extension in West Africa. His business relationships with governments in this region have propelled EF Network to be one of the top rated government contractors and technology security experts in the country. EF Network Limited is also operating in Singapore, Hongkong, Iceland, China, America and Nigeria. EF Network is a part of a conglomerate of companies owned by EF Group where Mr.Egbuchulam has been the Chairman and CEO since 1985. EF Group owns six companies operating in four continents. Through Mr. Egbuchulam leadership all of the EF Group companies have become successful, providing services in wireless solutions, energy, electronics, security technologies, environment and financial services..',
    },
    {
      slug: 'john-nix',
      name: 'John Nix',
      image: nix,
      position: "Chief Financial Officer (CFO)".toUpperCase(),
      description: 'Mr. Nix is the Chief Financial Officer (CFO) of E.F. Network Ltd. and the Managing Director of NSC Group. NSC has been providing investment banking services for economic, infrastructure and SME projects in developing countries. For over 40 years, he has provided infrastructural funding for governments and conglomerate companies in excess of $30billion dollars. Mr. Nix has been working in Western Africa with EF Network for nearly 20 years on numerous projects. For 26 years during this time period, Mr. Nix also owned and operated in SEC (Securities and Exchange Commission) registered investment brokerage firm, which underwrote securities offering for start-up businesses, mergers and acquisitions, and business expansion programs. Mr. Nix wealth of knowledge in investment banking and financing is a ready-made solution for governments in the emerging market regions of the world..',
    },
    {
      slug: 'john-hardy',
      name: 'John Hardy',
      image: hardy,
      position: "Chief Operating Officer (COO)".toUpperCase(),
      description: 'Business leader with unique blend of engineering, sales, operations and entrepreneurial experience; from US to Africa to Asia; from start-ups to top 500; from hands-on in-the-field roles to C-suite offices. Extensive experience in project management and international sales including Electrical Engineering, Inverters, Renewable Energy - IPP ( NUG ) Utility’s and IT sectors with WiMax, PWiMax, Wi-Fi/in building and mobile roaming, CDMA, 3G, 4G, and LTE designs. Motivated, self-managed leader, results-driven in company operations, with an in-depth understanding of emerging technologies. Decades of designing and developing transition plans between legacy and next generation systems, on time and under budget. Seasoned professional with hands on approach in technical operations in international, developing and developed markets globally..',
    },
    {
      slug: 'varadarajan-narayanan',
      name: 'Varadarajan Narayanan',
      image: vara,
      position: "Chief Information Officer (CIO)".toUpperCase(),
      description: 'Electrical Engineer with 20+ in Industrial Electronics, Instrumentation and control specialized in turnkey projects. Being a consultant for various industries for more than two decades, a hands-on person with crisis management and problem solving ability with extensive domain knowledge in various process industries. Being well versed with a wide range of process control instruments, data communications and networking,cutting edge technologies like IT-OT convergence is of immense interest .A penchant for groundbreaking for new technologies and related business development. In addition to exemplary knowledge in process control and instrumentation, have diversified skill sets covering, technical writing, project management and business development. Excellent inter-personal, phone and digital communication skills. Advocate of open source technologies and very active in contributing to the Open source philosophy.  Working with government bodies for promoting open source in E-governance and community projects. Preference for very challenging assignments like groundbreaking for new technologies. Able to meet the challenges encountered when working with individuals of various nationalities in team environments or one-on-one. Highly motivated and keep up to date in technological developments in related fields. Extremely resourceful and goal-oriented. Capable of meeting targets with available resources. Capable of evolving  special tools in order to improve productivity achieve targets and promote teamwork - web sites, knowledge base, design aids, jigs and fixtures and tools..',
    },
    {
      slug: 'tom-manliclic',
      name: 'Tom Manliclic',
      image: gideon,
      position: "Chief Technology Officer (CTO)".toUpperCase(),
      description: 'Tom is technically-savvy professional with a pioneering career reflecting strong leadership qualifications coupled with “hands-on” IS and networking expertise. Known as a strong leader and with over 18 years of IT Systems Management which includes system/network administration, development and maintenance. Experienced in technical management, change management, deployment and support in several business applications. Always interested in application of new technologies, enterprise wide wired/wireless system deployment, database and back-end system management. His exemplary track record in the spearheading start-up, turn-around and business growth leveraging strategies, complemented by his profound technical involvement and fiery leadership skills has made him a driving force in ensuring business growth and profitability..',
    }
  ];

  // Find the specific team member based on the URL parameter
  const teamMember = teamMembers.find(member => member.slug === name);

  if (!teamMember) {
    return <div>Team member not found</div>;
  }



  return (
    <div className="bg-gray-100  text-sm">
      {/* <div className="absolute inset-0 ">
        <img
          src={stars}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}

      <Header
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />

      {isMobile ? <div></div> : <MenuBar />}

      <div className="flex">
        <div className="w-full rounded-lg">
          {isMenuOpen ? (
            <div></div>
          ) : (
            <HeaderParallax
              imageUrl={conference} //"/images/your-image.jpg";
              title={"Our Team"}
              subtitle={""}
            />
          )}

          <div
            className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mb-20"
            style={{
              backgroundImage: `url(${background})`,
              backgroundAttachment: "fixed",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="flex flex-col items-center justify-center mt-12 mb-2">
              <p
                className=" mb-2"
                style={{ color: "", fontWeight: "600", fontSize: "24px" }}
              >
                Our Team
              </p>
              <div
                className="bg-theme mb-2"
                style={{ width: "80px", height: "4px" }}
              ></div>
            </div> */}

            <div className=" flex flex-col md:flex-row items-center justify-between mt-4 ">
              <div
              className="flex flex-col md:flex-row w-full  justify-center items-center rounded-md shadow-md m-2 px-4 py-8 bg-white min-h-[200px]">
                <div className="flex flex-col md:w-1/2 justify-center items-center ">
                  <img
                  className="block h-60 w-60 mb-2 mt-4 rounded-lg"
                  src={teamMember.image}
                  alt="Gideon"
                  onClick={() => {
                    // navigate("/");
                  }}
                  style={{ cursor: "pointer" }}
                />
                {/* <div
                  className="mb-1"
                  style={{ fontWeight: "600", fontSize: "16px" }}
                >
                  {teamMember.name}
                </div> */}
                <span
                  className="mb-3 px-4 py-2 bg-darkTheme rounded-lg"
                  style={{ color: "#EBEA1C" }}
                >
                  {teamMember.position}
                </span>
                </div>

<div className="md:w-1/2">
<div
                  className="mb-1"
                  style={{ color: "", fontWeight: "600", fontSize: "24px" }}
                >
                  About {teamMember.name}
                </div>
<div
                  className="bg-theme mb-2"
                  style={{ width: "60px", height: "2px" }}
                ></div>

                <div
                  className="px-8 text-left my-4"
                  style={{ fontSize: "16px", color: "#777777" }}
                >
                  {teamMember.description}
                </div></div>



                
              </div>

            </div>


          </div>
        </div>
      </div>
      <Parallax
        imageUrl={conference} //"/images/your-image.jpg";
        title={"Bringing Your Dreams To Reality Using Modern Technology"}
        subtitle={"Ready to begin your journey with us?"}
      />

      <Footer
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
    </div>
  );
}
