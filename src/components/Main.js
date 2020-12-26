import PropTypes from 'prop-types'
import React from 'react'
import drone from '../images/drone.jpg'
import drone2 from '../images/drone2.jpg'
import nyc from '../images/nyc.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={drone} alt="" />
          </span>
          <p>
            We are a drone repair shop based in Tribeca, New York City. As a mail-in drone shop, we 
            service multiple industry brands, including DJI, Parrot and Altair Aerial. 
            Send us a request with the brand of your drone and the issue. If we can service your request,
            we'll send you a bid and you can mail in the drone for repair services. We can guarantee that 
            your drone will be sent back, fully operational, within the time delineated in the bid.
      
          </p>
          <p>
            Our pricing is case-dependent. After you send us your intiial request, we will reply 
            if we can service your drone with a request for more information and a picture of the 
            drone. Please make sure your photograph shows the part that is not functional, if applicable. 
            We will work with you to find out exactly what is needed to repair your drone, or to customize or upgrade it. We 
            are continuing to operate during COVID-19 with appropriate sanitation procedures. We look forward to 
            receiving your request. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={drone2} alt="" />
          </span>
          <p>
            Our services include replacement parts, upgrades, customizations and more. 
             We test fly every drone before we send it back to you and can guarantee its functionality. 
          </p>
          <p>
            Brands we have worked on in the past include DJI, Parrot, Altair Aerial,
            Cheerson, DROCON, Eachine, Force1, Holy Stone, Hubsan and Syma. We are able to fix 
            lesser known brands or specialized products. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={nyc} alt="" />
          </span>
          <p>
            LD Drone Repairs is founded by Lorenzo D'Agostino and based in the Tribeca neighborhood of New York City. You may contact him at lorenzo@lddronerepairs.com.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
    
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
