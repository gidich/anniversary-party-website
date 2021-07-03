import React, { FC } from "react";
import { withRouter, RouteComponentProps, useHistory } from "react-router";
import { Layout, Menu, Collapse, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { useGA4React } from "ga-4-react";
import { Helmet } from 'react-helmet';
import { MenuOutlined } from '@ant-design/icons';


const { Header,  Content } = Layout;
const { Panel } = Collapse;

const Schedule: FC< RouteComponentProps| any> = (props) => {
  const ga = useGA4React();
  const history = useHistory();

  var onPanelChange = (key:string | string[]) => {
    if(ga && key ){
      ga.gtag(
        'event',
        'select_content',
        {
          'content_type':'day-panel',
          'item_id': JSON.stringify(key)  as string
        }
      );
    }
  }

  const trackOutboundLink = (event:any) => {
    var targetUrl = event.target.href;
    if(ga && targetUrl ){
      ga.gtag(
        'event',
        'click',
        {
          'page_location': targetUrl,
          'page_referrer': document.location.pathname + document.location.search
        });
    }
  }
  /*

            
          */


  const menuItemSelected = async (e: any) => {
    switch (e.key) {
      case 'home':
        history.push(`/`);
        break;
      case 'resources':
        history.push(`/resources`);
        break;
    }
  };
  
  return(
    <>
        <Helmet>
          <title>50+1 Anniversary Celebration : Schedule</title>
        </Helmet>
        <Header style={{position: "fixed", zIndex:1, width:"100%"}}>
          <Menu 
            onClick={(e: any) => menuItemSelected(e)}
            theme="dark" 
            mode="horizontal" 
            defaultSelectedKeys={['home']} 
            overflowedIndicator={<div> <MenuOutlined /> </div>} >
            <Menu.Item key='home'>
              Home
            </Menu.Item>
            <Menu.Item key='resources'>
              Resources
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout">
          <div className="site-layout-content">
            <h1>Sandy and Dennis Gidich's 50+1 Anniversary Party!</h1>
            <Collapse defaultActiveKey={['2']} onChange={onPanelChange} >
              <Panel header="Friday, July 2nd" key="2" >
              <h3>Dinner</h3>
                <p>
                  <b>Houlihan’s Restraurant</b>
                    [<a href='https://houlihans.com/Westlake' target='_blank' rel='noreferrer'  onClick={trackOutboundLink}>Website</a>]
                    [<a href='https://www.google.com/maps/dir//Houlihan%E2%80%99s+Restaurant+westlake/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883092843bd580c1:0x9413e797a2d37ea4?sa=X&ved=2ahUKEwjy-Y7_6bjxAhWLiOAKHeRtB9kQ9RcwHnoECGgQBA' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Directions</a>]
                    <br/>
                  25651 Detroit Rd., Westlake<br/>
                  440-808-9090<br/>
                  Great patio and indoor seating available<br/>
                  Open until 9:00 pm<br/>
                  We’ll make a group reservation for those who want to join us (time TBD) text Sandy to let us know!<br/>
                </p>  
                <h3>Fireworks</h3>
                <p>
                  <b>Weiss Field</b><br/>
                  33401 Webber Rd, Avon Lake, OH 44012
                  [<a href='https://www.google.com/maps/dir//weiss+field/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883085553c9462af:0x89097e0008d8a2c6?sa=X&ved=2ahUKEwiUiIG-67jxAhUJhuAKHQoXAHsQ9RcwHHoECEUQBA' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Directions</a>]<br/>
                  For anyone who wants to see Fireworks on July 2nd<br/>
                  Schedule:<br/>
                </p>
                <ul>
                  <li>6:00PM-8:00PM Anne DeChant [<a href='https://www.anneedechant.com/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>]</li>
                  <li>8:00PM-10:00PM Spagmatics - 80's tribute [<a href='https://thespazmatics.net/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>]</li>
                  <li>10:00PM Fireworks</li>
                </ul>
                <p>
                Food trucks:
                </p>
                <ul>
                  <li>Jones Bones BBQ</li>
                  <li>Nelly Belly</li>
                  <li>Kona Ice</li>
                  <li>many more!</li>
                </ul>
              </Panel>
              <Panel header="Saturday, July 3nd" key="3">
                <h3>4:00 PM - 5:30PM Dinner</h3>
                <p>
                  
                  <b>Union Town Provisions</b>
                    [<a href='https://www.facebook.com/uniontownprovisions/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Facebook</a>]
                    [<a href='https://uniontownprovisions.com/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>] 
                    <br/>
                  426 Broadway, Lorain, OH 44052
                  [<a href='https://www.google.com/maps/dir/39.9638528,-75.5662848/union+town+provisions/@40.6238901,-83.3605995,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88309db30f5f1039:0x86c6a31f441cbd36!2m2!1d-82.177013!2d41.466771' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Directions</a>]<br/>
                 
                 
                  Food and Champagne Cocktail Specials<br/>
                </p>
                <h3>5:30 PM - ??PM Live Music</h3>
                <p>
                  <b>Black River Landing</b>&nbsp;
                  [<a href='https://www.rockinontheriver.com/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>]
                  <br/>
                  421 Black River Lane [<a href='https://www.google.com/maps/dir//black+river+landing/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88309d1c6161f8e1:0xbcdd2630ffc2bddc?sa=X&ved=2ahUKEwio0vjc8LjxAhXEm-AKHYNMD5wQ9RcwHHoECEIQBA' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Directions</a>]<br/>
                  Located just across the street from Union Town Provisions<br/>
                  Rockin’ On the River! Outdoor music venue<br/>
                  Gates open at 5:30 Opener at 6:15 and Headliner at 8:45<br/>
                </p>
                <ul>
                  <li>
                    <b>Admission: $7.00 </b><br/>
                  </li>
                  <li>
                    <b>Camp/Lawn Chairs/ Picnic Blankets:</b> please bring your own, for those flying in - we'll have we’ll have extra chairs for you<br/>
                  </li>
                </ul>
                <p>
                  Featuring Classic Stones Live - Rolling Stones Tribute featuring the Glimmer Twins [<a href='http://theglimmertwins.com/'  target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>] with My Drunk’n Uncle [<a href='https://www.mdurocks.com/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>]<br/>
                  Food Trucks are available<br/>
                </p>
              </Panel>
              <Panel header="Sunday, July 4th - Celebration" key="5">
                <h3>5:00 PM - 11:00 PM Anniversary Party</h3>
                <p>
                  <b>Residence Inn</b><br/>
                </p>
                <ul>
                  <li>5:00P - 5:30P Cocktails and Appetizers</li>
                  <li>5:30P - 11PM Dinner &amp; Live Music</li>
                </ul>
                <p>
                  Sparklers and Sky Lanterns will follow for those staying at the Hotel<br/>
                  Should be able to see Fireworks at Black River Landing from Hotel (~10PM)<br/>
                </p>
              </Panel>
              <Panel header="Monday, July 5th" key="6">
                <h3>11:30 AM - 2:30 PM Chill with Us</h3>
                <p>
                  <b>For Hotel Guests - Residence Inn -  Patio</b><br/>
                  Enjoy a visit on the patio, lounge in the pool, play some games and listen to some great music.<br/>
                </p>
                <h3><em>10:00 PM Fireworks - Rain Date</em></h3>
                <p>
                  <b>Black River Landing</b>&nbsp;
                  [<a href='https://www.rockinontheriver.com/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>]
                  <br/>
                  421 Black River Lane [<a href='https://www.google.com/maps/dir//black+river+landing/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88309d1c6161f8e1:0xbcdd2630ffc2bddc?sa=X&ved=2ahUKEwio0vjc8LjxAhXEm-AKHYNMD5wQ9RcwHHoECEIQBA' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Directions</a>]
                  <br/>
                  <em>Only If fireworks are cancelled on the 4th</em>, Blackriver landing fireworks will take place at Blackriver Landing on the 5th
                  [<a href='https://www.lorainport.com/events-calendar/annual-independence-day-fireworks/' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Website</a>]
                </p>
              </Panel>
              <Panel header="Tuesday, July 6th" key="7">
                <h3>Cedar Point</h3>
                <p>
                  Reservations are no longer required for those who want to enjoy the day at the point!<br/>
                  [<a href='https://www.cedarpoint.com/daily-tickets' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Tickets</a>]
                  [<a href='https://www.google.com/maps/dir/39.965686,-75.518309/cedar+point+amusement+park/@40.2813634,-83.5868981,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883a44453409f6b7:0xae0d3d15735875a7!2m2!1d-82.6835206!2d41.482207' target='_blank' rel='noreferrer' onClick={trackOutboundLink}>Directions</a>]
                </p>
              </Panel>
            </Collapse>
          </div>
        </Content>
    </>
  )
}

export default withRouter(Schedule);