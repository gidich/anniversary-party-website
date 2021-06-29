import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { debug } from "console";

const { Header,  Content } = Layout;

const Resources: FC< RouteComponentProps| any> = (props) => {

  const trackOutboundLink = (event:any) => {
    event.cancel();
    debugger;
    return false;
  }

  return(
    <>
        <Helmet>
          <title>50+1 Anniversary Celebration : Resources</title>
        </Helmet>
        <Header style={{position: "fixed", zIndex:1, width:"100%"}}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['resources']}>
            <Menu.Item key='home'>
              <Link to={`/`}>Home</Link>
            </Menu.Item>
            <Menu.Item key='resources'>
              <Link to={`/resources`}>Resources</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout">
          <div className="site-layout-content">
            <h1>Sandy and Dennis Gidich's 50+1 Anniversary Party!</h1>

                <Row>
                  <Col span={24}>
                    <h3>Hotel and Event Location:</h3>
                  </Col>
                  <Col span={24}>
                    <p>
                      <b>Residence Inn by Marriott Cleveland/Avon at the Emerald Event Center</b>
                        [<a href='https://www.marriott.com/hotels/travel/cleab-residence-inn-cleveland-avon-at-the-emerald-event-center/' target='_blank' rel='noreferrer' onClick={(event) => trackOutboundLink(event)}>Website2</a>]
                        [<a href='https://www.google.com/maps/dir//Residence+Inn+by+Marriott+Cleveland%2FAvon+at+the+Emerald+Event+Center/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883091c5c16c34d5:0xf748d30534c6a6c8?sa=X&ved=2ahUKEwjZ99_81rvxAhVXSTABHfPPAn4Q9RcwE3oECFAQBQ' target='_blank' rel='noreferrer'>Directions</a>]
                      <br/>
                      33040 Just imagine Drive, Avon<br/>
                      Just west of Cleveland Clinic Avon<br/>
                    </p>
                    <p>
                      Complimentary Breakfast served daily off the front Lobby<br/>
                      7-10am Saturday &amp; Sunday<br/>
                      6-9am Monday-Friday<br/>
                    </p>
                  </Col>


                  <Col span={24}>
                    <h3>Bar 41.82</h3>
                  </Col>
                  <Col span={24}>
                    <p>
                      (Located at the Hotel)<br/>
                      Open 5pm Monday-Saturday<br/>
                      Serving Drinks, Appetizers, Flatbreads, Salads<br/>
                    </p>
                    <p>
                    Many restaurants located in the area for dine in or carry out.<br/>
                    </p>
                  </Col>

                  <Col span={24}>
                    <h3>Other Local Info</h3>
                  </Col>
                  <Col span={24}>
                    <p>
                      <b>Tesla supercharger:</b><br/>
                      Sheetz 
                        [<a href='https://www.tesla.com/findus/location/supercharger/sheffieldohsupercharger' target='_blank' rel='noreferrer'>Website</a>]
                        [<a href='https://www.google.com/maps/dir/39.965686,-75.518309/Sheffield,+OH+Supercharge/@40.6040025,-83.3055462,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88309a3634324555:0xdc63757529f8959c!2m2!1d-82.0762515!2d41.4269492' target='_blank' rel='noreferrer'>Directions</a>]
                        <br/>
                      5295 Detroit Rd <br/>
                      Sheffield Village <br/>
                      Open 24 Hrs (2 exits west of hotel) <br/>
                      <br/>
                    </p>
                  </Col>
                </Row>

              
          </div>
        </Content>
    </>
  )
}

export default withRouter(Resources);