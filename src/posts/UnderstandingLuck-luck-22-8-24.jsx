import React from 'react';
import { useEffect } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavBarComp from '../Component /NavBar';
import FooterComp from '../Component /footer';
import luckImage from '../assets/luck-22-8-24-img/istockphoto-1344820084-170667a.jpg'; // Update the path as needed

const UnderstandingLuck = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);

  return (
    <>
    <NavBarComp></NavBarComp>
    <MDBContainer className="mt-5">
      <MDBCard>
        <MDBCardImage
          src={luckImage}
          alt="Understanding Luck"
          position="top"
          className="img-fluid custom-image" // You can define this class in your CSS for custom sizing
          style={{ width: '50%', height: 'auto' }}
        />
        <MDBCardBody>
          <MDBTypography tag='h2' className='mb-4'>Understanding Luck</MDBTypography>
          <MDBTypography tag='p' className='mb-4'>
            Luck is often perceived as an unpredictable force that can have a significant impact on our lives. Whether it's a stroke of good fortune or a run of bad luck, the concept of luck plays a pivotal role in how we experience and interpret events. This article delves into the nature of luck, exploring its psychological implications and the ways it influences our daily lives.
          </MDBTypography>
          <MDBTypography tag='h4' className='mb-3'>What Is Luck?</MDBTypography>
          <MDBTypography tag='p' className='mb-4'>
            Luck can be defined as the chance happening of events that have a positive or negative impact on an individual's life. Unlike skill or effort, luck is not something that can be controlled or predicted with certainty. It often manifests in unexpected ways, influencing outcomes that might otherwise be attributed to chance or randomness.
          </MDBTypography>
          <MDBTypography tag='h4' className='mb-3'>The Psychology of Luck</MDBTypography>
          <MDBTypography tag='p' className='mb-4'>
            The belief in luck can significantly affect our psychological well-being. Those who experience good luck may feel empowered and optimistic, while those who encounter misfortune might struggle with feelings of frustration or helplessness. The perception of luck can shape our attitudes, decision-making processes, and overall outlook on life.
          </MDBTypography>
          <MDBTypography tag='h4' className='mb-3'>Coping with Luck</MDBTypography>
          <MDBTypography tag='p' className='mb-4'>
            Understanding and accepting the role of luck in our lives can help us better cope with its effects. By recognizing that some outcomes are beyond our control, we can focus on aspects of our lives where our actions can make a difference. Developing resilience and maintaining a positive mindset are essential strategies for managing the unpredictable nature of luck.
          </MDBTypography>
          <MDBTypography tag='h4' className='mb-3'>Conclusion</MDBTypography>
          <MDBTypography tag='p'>
            While luck is an inherent part of life, our responses to it are what truly define our experiences. By embracing the concept of luck and its psychological impact, we can navigate the uncertainties of life with greater awareness and adaptability. Whether we encounter fortunate or adverse events, understanding luck allows us to approach life with a balanced perspective.
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <FooterComp></FooterComp>
    </>
  );
};

export default UnderstandingLuck;
