import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          CUSTOM SOFTWARE DEVELOPMENT  Specializing In Providing bespoke Software Solutions tailored to
              your unique needs.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 color='black
              ' className='text-uppercase'></h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  <h6> "Pixonate Lab Private Limited"</h6>
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  specializes in healthcare applications, industry 4.0 standards, and data science, delivering innovative solutions in cloud computing, AI, and cybersecurity.
                  </a>
                </li>
                
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text'>Services</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Data Science

                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Industry 4.0 standards
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Healthcare Applications
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text'>Head Office Address</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  B/7 Radha Raman Society,Near Krishna Chowk, New Sanghavi,Pune, Maharashtra 411061
                  </a>
                </li>
                
                
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text'>Days open</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    
                  Monday - Friday 9:30 AM- 6:30 PM
Sat & Sun Closed
                    
                    
                  </a>
                </li>
                
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        {/* © 2020 Copyright: */}
        <a className='text-white' href='https://mdbootstrap.com/'>
          {/* MDBootstrap.com */}
        </a>
      </div>
    </MDBFooter>
  );
}