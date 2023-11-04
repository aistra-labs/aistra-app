import React, { memo } from "react";
import "./products.css";
import { images }from "../../components/images";
import ProductCard from "../../components/productCard";

const Products = () => {

    const cardData = [
        {
          header: "UnconstrainED",
          description: "Platform enabling K-12 teachers worldwide to get AI savvy, enhance productivity using AI tools, ensure ethical and compliant usage within the education community, and amplify creativity and personalization within the classroom.",
          imageUrl: images['unconstrained-logo-new.png'],
          knowMore: "https://unconstrained.work/",
          style: 'image1'
        },
        {
          header: "DeepTalk",
          description: "Scalable and industry-specific Conversational AI enabling 50% or higher productivity improvement, 24x7 responsiveness, top-notch response quality, and multilingual capability for customer care and customer success.",
          imageUrl: images['deeptalk-logo-2.svg'],
          knowMore: "",
          style: 'image2'
        },
        {
          header: "V.IP",
          description: "AI platform for global registration and protection of brand and corporate identity including trademarks, copyright, brand collateral and digital destinations, offered to legal advisors, branding agencies, and brand owners.",
          imageUrl: images['vip-logo-2.svg'],
          knowMore: "",
          style: 'image3'
        },
        {
          header: "FNA.AI",
          description: "Fast and accurate microapps, virtual assistants, and managed services for accounting, reconciliations, tax advisory, audit support, ESG accounting, and compliance, aimed at both professional services providers and the CFO's office.",
          imageUrl: images['fni-logo-2.svg'],
          knowMore: "",
          style: 'image3'
        },
    ];

    return (
        <section id="products" className="products-container">
            <div className="products-header">
                Products & Solutions
            </div>
            <div className="products-cards">
                {cardData.map((card, index) => {
                    return(
                        <ProductCard 
                            key={index}
                            header={card.header}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            knowMore={card.knowMore}
                            style={card.style}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default memo(Products);
