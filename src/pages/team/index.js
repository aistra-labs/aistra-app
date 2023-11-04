import React, { memo } from "react";
import "./team.css";
import { images }from "../../components/images";
import TeamCard from "../../components/teamCard";

const Team = () => {

    const cardData = [
        {
          name: "Alex Johnson",
          designation: "Consultant",
          imageUrl: images['alex-pic.png'],
          linkedinUrl: "https://www.linkedin.com/in/alexrajohnson"
        },
        {
            name: "Ambreesh Mahajan",
            designation: "Co Founder and Partner",
            imageUrl: images['ambreesh-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/ambreesh-j-mahajan-28291886/"
        },
        {
            name: "Anup Kollanethu",
            designation: "Consultant",
            imageUrl: images['anup-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/anupkollanethu/"
        },
        {
            name: "Craig Johnson",
            designation: "Consulting Partner",
            imageUrl: images['craig-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/craigjohnson2010"
        },
        {
            name: "Deborah Kops",
            designation: "Consulting Partner",
            imageUrl: images['deborah-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/deborahskops/"
        },
        {
            name: "Eric Selvadurai",
            designation: "Co founder and Managing Partner",
            imageUrl: images['eric-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/eric-selvadurai-25601a2/"
        },
        {
            name: "Fiona Reynolds",
            designation: "Consultant",
            imageUrl: images['fiona-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/fiona-reynolds-42682013"
        },
        {
            name: "Hari Balaji",
            designation: "Partner (Product)",
            imageUrl: images['hari-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/haribalaji/"
        },
        {
            name: "Kishore Mirchandani",
            designation: "Co Founder and CFO",
            imageUrl: images['kishore-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/kishore-mirchandani-b9426247/"
        },
        {
            name: "Maria D'Lima",
            designation: "Vice President",
            imageUrl: images['maria-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/maria-d-lima-89a85914/"
        },
        {
            name: "Merrick Ferro",
            designation: "Vice President",
            imageUrl: images['merric-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/merrickferro/"
        },
        {
            name: "Naveen Upadhyay",
            designation: "Partner (Technology)",
            imageUrl: images['naveen-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/naveen-upadhyay-76612210/"
        },
        {
            name: "Neeraj Bhargava",
            designation: "Co Founder and Managing Partner",
            imageUrl: images['neeraj-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/neeraj-bhargava-a87474/"
        },
        {
            name: "Rajiv Maheshwari",
            designation: "Consulting Partner",
            imageUrl: images['rajiv-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/rajivmah/"
        },
        {
            name: "Sulakshana Patankar",
            designation: "Co Founder and Partner",
            imageUrl: images['sulak-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/sulakshana-patankar/"
        },
        {
            name: "Tarun Sachdeva",
            designation: "Vice President",
            imageUrl: images['tarun-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/1tarunsachdeva/"
        },
        {
            name: "Twarit Anand",
            designation: "Vice President",
            imageUrl: images['twarit-pic.png'],
            linkedinUrl: "https://www.linkedin.com/in/twarit-anand-88a07024/"
        },
    ];

    return (
        <section id="team" className="team-container">
            <div className="team-header">
                Team
            </div>
            <div className="team-cards">
                {cardData.map((card, index) => {
                    return(
                        <TeamCard 
                            key={index}
                            name={card.name}
                            designation={card.designation}
                            imageUrl={card.imageUrl}
                            linkedinUrl={card.linkedinUrl}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default memo(Team);
