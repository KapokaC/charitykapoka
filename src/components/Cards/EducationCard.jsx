import React, { useState } from 'react';
import { Card as BootstrapCard, Row, Col, Image } from 'react-bootstrap';
import "./cards.css";

const Span = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <span
      style={{
        overflow: 'hidden',
        display: '-webkit-box',
        maxWidth: '100%',
        WebkitLineClamp: isExpanded ? 'unset' : '4', // Display all lines if expanded
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        cursor: 'pointer', // Add cursor pointer to indicate it's clickable
      }}
      onClick={handleToggleExpand}
    >
      {children}
    </span>
  );
};

const EducationCard = ({ education }) => {
  return (
    <BootstrapCard
      className="w-100 custom-card"
      style={{ width: '100%', marginBottom: '20px' }} // Set width to 100%
    >
      <Row className="w-100 justify-content-center align-items-center">
        <Col xs={12} md={10} lg={8}>
          <Row className="w-100 justify-content-between align-items-center">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Image
                src={education.img}
                alt="Experience"
                className="img-fluid"
                style={{
                  height: '50px',
                  backgroundColor: '#000',
                  borderRadius: '10px',
                  marginTop: '4px',
                }}
              />
            </Col>
            <Col xs={12} sm={6} md={8} lg={9}>
              <div>
                <h6 style={{ fontSize: '18px', fontWeight: '600', color: '#F2F3F4' }}>
                  {education.school}
                </h6>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#b1b2b3' }}>
                  {education.degree}
                </p>
                <p style={{ fontSize: '12px', fontWeight: '400', color: '#b1b2b3' }}>
                  {education.date}
                </p>
                <p style={{ fontSize: '12px', fontWeight: '400', color: '#b1b2b3' }}>
                  {education.grade}
                </p>
              </div>
            </Col>
          </Row>
          <div className='description'
            style={{
              width: '100%',
              fontSize: '15px',
              fontWeight: '400',
              color: '#F2F3F4',
              marginBottom: '10px',
            }}
          >
            {education?.desc && <Span>{education?.desc}</Span>}
            {education?.skills && (
              <>
                <br />
                <div style={{ display: 'flex', gap: '12px', marginTop: '-10px' }}>
                  <b>Skills:</b>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {education?.skills?.map((skill, index) => (
                      <div key={index} style={{ fontSize: '15px', fontWeight: '400', color: '#F2F3F4' }}>
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </BootstrapCard>
  )
}

export default EducationCard;

// import React from 'react';
// import { Card as BootstrapCard, Row, Col, Image } from 'react-bootstrap';
// import "./cards.css";

// const Span = ({ children }) => (
//   <span
//     style={{
//       overflow: 'hidden',
//       display: '-webkit-box',
//       maxWidth: '100%',
//       WebkitLineClamp: '4',
//       WebkitBoxOrient: 'vertical',
//       textOverflow: 'ellipsis',
//     }}
//   >
//     {children}
//   </span>
// );



// const EducationCard = ({ education }) => {
//   return (
//     <BootstrapCard
//       className="w-100 custom-card" 
      
//     >
//       <Row className="w-100 justify-content-center align-items-center">
//         <Col xs={12} md={10} lg={8}>
//           <Row className="w-100 justify-content-between align-items-center">
//             <Col xs={12} sm={6} md={4} lg={3}>
//               <Image
//                 src={education.img}
//                 alt="Experience"
//                 className="img-fluid"
//                 style={{
//                   height: '50px',
//                   backgroundColor: '#000',
//                   borderRadius: '10px',
//                   marginTop: '4px',
//                 }}
//               />
//             </Col>
//             <Col xs={12} sm={6} md={8} lg={9}>
//               <div>
//                 <h6 style={{ fontSize: '18px', fontWeight: '600', color: '#F2F3F4' }}>
//                   {education.school}
//                 </h6>
//                 <p style={{ fontSize: '14px', fontWeight: '500', color: '#b1b2b3' }}>
//                   {education.degree}
//                 </p>
//                 <p style={{ fontSize: '12px', fontWeight: '400', color: '#b1b2b3' }}>
//                   {education.date}
//                 </p>
//                 <p style={{ fontSize: '12px', fontWeight: '400', color: '#b1b2b3' }}>
//                   {education.grade
//                   }
//                 </p>
//               </div>
//             </Col>
//           </Row>
//           <div className='description'
//             style={{
//               width: '100%',
//               fontSize: '15px',
//               fontWeight: '400',
//               color: '#F2F3F4',
//               marginBottom: '10px',
//             }}
//           >
//             {education?.desc && <Span>{education?.desc}</Span>}
//             {education?.skills && (
//               <>
//                 <br />
//                 <div style={{ display: 'flex', gap: '12px', marginTop: '-10px' }}>
//                   <b>Skills:</b>
//                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                     {education?.skills?.map((skill, index) => (
//                       <div key={index} style={{ fontSize: '15px', fontWeight: '400', color: '#F2F3F4' }}>
//                         • {skill}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </BootstrapCard>
//   )
// }

// export default EducationCard;
