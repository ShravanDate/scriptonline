import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

let keyLockHTML = '', introHTML = '', formStep01HTML='', backgroundsHTML = '';
class Section extends Component {
  constructor(props){
    super(props);
    this.state = {
       response: '',
       intro:true,
       keyLock : false,
       formStep01:false,
       value: ''
    };
    this.getStartClick = this.getStartClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
 }
 handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
 getStartClick() {
  this.setState({
       intro:false,
       formStep01:true
  })
 }
  render() {
    const params = {
      pagination: false,
      navigation: false,
      autoplay : true,
      spaceBetween: 30
    }

    backgroundsHTML = (<div className="backgrounds">
            <div className="start"></div>
            <div className="form hide"></div>
            <div className="keyLock hide"></div>
            <div className="keyUnLock hide"></div>
          </div>);
    if(this.state.keyLock) {
      keyLockHTML = (
         <div className="keyLock">
            <div className="box">
              <div className="lock"></div>
              <div className="key">
                <div className="numberBox">
                  <ul>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                    <li>X</li>
                  </ul>
                </div>
                <div className="line">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              </div>
            </div>
          </div>
      );
    }else{
      keyLockHTML = '';      
    }

    if(this.state.intro){
      introHTML = (<div className="intro">
            <div className="header">Unl<span>o</span>ck your <br />
              Space</div>
            <div className="text1">Here is your chance to win free furniture from Script, a modern and contemporary furniture brand by Godrej.</div>
            <div className="steps">
              <ul>
                <li><span>1</span>Register using your email address.</li>
                <li><span>2</span>Refer 3 friends.</li>
                <li><span>3</span>Get your key.</li>
              </ul>
            </div>
            <div className="clear"></div>
            <a href="javascript:;" className="button getStarted"  onClick={this.getStartClick}>get started</a> </div>)
    }else{
      introHTML = '';
    }

    if(this.state.formStep01){
      formStep01HTML = (<div className="form formStep1">
            <div className="header">You’re one step closer <br />
              to winning a Script product.</div>
            <div className="text1">Simply enter your details and register using your email address.</div>
            <div className="formWrapper">
            <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <input type="text" placeholder="Name" className="inputFields correct" value={this.state.value} onChange={this.handleChange} />
                  

                  <span className="error">error</span> </li>
                <li>
                  <div className="col3">
                    <div className="seletMenu">
                      <select className="inputFields">
                        <option value="age">Age</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                    <span className="error">error</span> </div>
                  <div className="col6">
                    <input type="text" name="" placeholder="Mobile no" className="inputFields" />
                    <span className="error">error</span> </div>
                </li>
                <li>
                  <input type="text" name="" placeholder="Email Address" className="inputFields wrong" />
                  <span className="error">error</span> </li>
                  <li>
                      <input className="button nextForm" type="submit" value="Submit" />
                  </li>
              </ul>
              </form>
            </div>
            <div className="clear"></div>
            <a href="javascript:;" className="button nextForm">next</a> </div>)

          backgroundsHTML = (<div className="backgrounds">
            <div className="start"></div>
            <div className="form show"></div>
            <div className="keyLock hide"></div>
            <div className="keyUnLock hide"></div>
          </div>);
    }else{
      formStep01HTML = '';
      
    }

    return (

  <div className="section">
     <section className="wrapper">
      <div className="midWrapper">
        <div className="leftSection">
          <div className="banner">

            <div className="swiper-container">
              <div className="swiper-wrapper">
              <Swiper {...params}>
                <div className="swiper-slide"><img src="images/slideImg1.png" alt="" /></div>
                <div className="swiper-slide"><img src="images/slideImg2.png" alt="" /></div>
                <div className="swiper-slide"><img src="images/slideImg3.png" alt="" /></div>
                <div className="swiper-slide"><img src="images/slideImg4.png" alt="" /></div>
               </Swiper>
              </div>
            </div>
          </div>

          {keyLockHTML}
          

          <div className="keyUnLock hide">
            <div className="box">
              <div className="key">
                <div className="numberBox">
                  <ul>
                    <li>9</li>
                    <li>9</li>
                    <li>9</li>
                    <li>9</li>
                  </ul>
                </div>
                <div className="line">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="rightSection">
          
          {introHTML}
          
          {formStep01HTML}

          <div className="form formStep2 hide">
            <div className="header">Refer a friend</div>
            <div className="text1">Refer 3 friends using their email IDs to unlock the key to Script your Space.</div>
            <div className="formWrapper">
              <ul>
                <li>
                  <div className="number">01</div>
                  <input type="text" name="" placeholder="Enter your friend’s email ID" className="inputFields" />
                  <span className="error">error</span> </li>
                <li>
                  <div className="number">02</div>
                  <input type="text" name="" placeholder="Enter your friend’s email ID" className="inputFields" />
                  <span className="error">error</span> </li>
                <li>
                  <div className="number">03</div>
                  <input type="text" name="" placeholder="Enter your friend’s email ID" className="inputFields" />
                  <span className="error">error</span> </li>
              </ul>
            </div>
            <div className="clear"></div>
            <button type="submit" value="Submit" className="submitButton">Submit</button>
          </div>
          <div className="thankYou hide">
            <div className="header">Here’s <br />
              your key.</div>
            <div className="text1">
              <p>Thank you for taking part! An email has been sent to your registered email address with your key.</p>
              <p>Visit our new store in Kirti Nagar, Delhi between <span>7th Sept. and 12th Sept.</span> to try your luck.</p>
              <p>Enter your 4-digit key at our store to unlock and win free Script furniture.</p>
              <p><a href="https://www.scriptonline.com/" target="_blank">Click here</a> to explore more Script products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="stepsIndication">
  <div className="line"></div>
    <ul>
      <li className="active"><span>1</span></li>
      <li><span>2</span></li>
      <li><span>3</span></li>
    </ul>
  </div>

  <div className="address">
    <ul>
      <li className="location">Script, 2 / 11, W.H.S Kirti Nagar, Near Kirti Nagar Police Station, New Delhi - 110015</li>
      <li className="phone">+ 91 8723678901</li>
    </ul>
  </div>
  <a href="#" className="tnc">T&C Apply</a>


  {backgroundsHTML}

  </div>

    );
  }
}

export default Section;
