import React, { Component, Fragment } from 'react'

import { Col, Container, Row, Button } from 'react-bootstrap'

import g from '../../asset/image/projectDetails.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


export class ProjectDetails extends Component {

    constructor(props) {
        super();
    }

     render() {

         let project_name='';
         let project_description ='';
         let total_duration='';
         let small_img='';
         let courses_long_description='';
         let courses_students_count='';
         let courses_lectures_count='';
         // let type='';
         let instructor_id='';
         let tags='';
         let price='';
         let skill='';
         let project_image_1='';



         let video_url='';
         let  Array=this.props.ProjectData;
         project_name=Array['project_name'];
         project_description=Array['project_description'];
         project_image_1=Array['project_image_1'];
         total_duration=Array['total_duration'];
         small_img=Array['small_img'];
         courses_long_description=Array['courses_long_description'];
         courses_students_count= Array['courses_students_count'];
         courses_lectures_count=Array['courses_lectures_count'];
         instructor_id=Array['instructor_id'];
         tags=Array ['tags'];
         skill=Array ['skill'];
         price=Array ['price'];
         video_url=Array ['video_url'];

          return (
             <Fragment>
             <Row>

                  <Col lg={6} md={6} sm={12} style={{background:'#D6E7FF'}} className="mt-5">
                       <Container className='mx-5 px-5 py-3'>
                            <h1> {project_name} </h1>
                            <p >
                                short Researches & Reports


                            </p>

                            <p>
                                 <FontAwesomeIcon icon={faCheckSquare} />
                                {project_description}

                            </p>

                            <Button variant="info" href="#"> Live Preview </Button>

                       </Container>

                  </Col>


                  <Col lg={6} md={6} sm={12} className="mt-5 m-0">

                       <img src={project_image_1}  className=" m-0" width={'100%'} />

                  </Col>


                  <Col lg={3} md={6} sm={12} className="mt-5 ms-5">
                  <Container>

                       <img src={project_image_1} height={'350px'} className=" m-0" width={'100%'} />
                       <h4 className='text-center mt-2'>Ross akdahsbhds</h4>
                       </Container>

                  </Col>


                  <Col lg={6} md={6} sm={12}  className="mt-5">
                  <Container >
                            <p> {project_description} </p>
                          

                       </Container>
        
                  </Col>



             </Row>
             <div className='d-flex'>
             <img src={project_image_1} height={'140px'}  className="mt-5 m-0" width={'25%'} />
             <img src={project_image_1} height={'140px'}  className="mt-5 m-0" width={'25%'} />
             <img src={project_image_1} height={'140px'}  className="mt-5 m-0" width={'25%'} />
             <img src={project_image_1} height={'140px'}  className="mt-5 m-0" width={'25%'} />

             </div>
             <Container className='mt-5'>
                            <p> {project_description} </p>
                          

                       </Container>

             
             
             
             </Fragment>
          )
     }
}

export default ProjectDetails
