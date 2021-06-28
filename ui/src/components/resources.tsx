import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const { Header,  Content } = Layout;

const Resources: FC< RouteComponentProps| any> = (props) => {
  return(
    <>
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
                      Residence Inn by Marriott Cleveland/Avon at the Emerald Event Center<br/>
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
                      Open 5pm Monday-Saturday<br/>
                      Serving Drinks, Appetizers, Flatbreads, Salads<br/>

                    </p>
                    <p>
                    Many restaurants located in the area for dine in or carry out.<br/>
                    Tesla superchargers-Sheetz 5295 Detroit Rd Sheffield Village Open 24 Hrs (2 exits west of hotel) <br/>
                    </p>
                  </Col>
                </Row>

              
          </div>
        </Content>
    </>
  )
}

export default withRouter(Resources);