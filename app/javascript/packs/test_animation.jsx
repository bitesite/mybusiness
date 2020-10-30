import React from 'react';
import ReactDOM from 'react-dom';
import {Spring} from 'react-spring/renderprops'

class TestAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      step: 1,
      percentComplete: 0 
    };
  }
  handleContinueClick = (e) => {
    e.preventDefault();
    const { step } = this.state;
    if(step !== 3) {
      this.setState({ step: this.state.step + 1 });
    }
  }

  handleBackClick = (e) => {
    e.preventDefault();
    const { step } = this.state;
    if(step !== 1) {
      this.setState({ step: step - 1 });
    }
  }

  percentCompleteFromStep = () => {
    const { step } = this.state;
    return parseFloat(step)/3.0 * 100.00;
  }

  textStyleFromStep = (stepName) => {
    const { step } = this.state;
    if(
      (stepName === 'shipping' && step === 1) ||
      (stepName === 'payment' && step === 2) ||
      (stepName === 'confirmation' && step === 3)
    )
    {
      return { fontWeight: 200, color: '#2288aa' };
    }

    return { fontWeight: 35, color: '#888' };
  }

  cardTopFromStep = (stepName) => {
    const { step } = this.state;

    if(stepName === 'shipping') {
      if(step === 1) {
        return { top: 80, left: 0, transform: 'rotate(0deg)' };
      } else {
        return { top: 1000, left: -100, transform: 'rotate(40deg)' };
      }
    }

    if(stepName === 'payment') {
      if(step === 1 || step === 2) {
        return { top: 45, left: 0, transform: 'rotate(0deg)' };
      } else {
        return { top: 1000, left: -100, transform: 'rotate(40deg)' };
      }
    }

    if(stepName === 'confirmation') {
      return { top: 10 };
    }
  }

  render() {
    return(
      <div className='component-test-animation'>
        <h1>Checkout</h1>

        <div className='steps'>
          <Spring
            to={this.textStyleFromStep('shipping')}
          >
            {
              (props) => {
                return (
                  <div className='step' style={props}>Shipping</div>
                );
              }
            }
          </Spring>
          <Spring
            to={this.textStyleFromStep('payment')}
          >
            {
              (props) => {
                return (
                  <div className='step' style={props}>Payment</div>
                );
              }
            }
          </Spring>
          <Spring
            to={this.textStyleFromStep('confirmation')}
          >
            {
              (props) => {
                return (
                  <div className='step' style={props}>Confirmation</div>
                );
              }
            }
          </Spring>
        </div>
        <div className='progress-bar-container'>
          <Spring
            from={{ width: '0%' }}
            to={{width: `${this.percentCompleteFromStep()}%`}}
          >
            {
              (props) => {
                return(
                  <div className='progress-bar' style={props}></div>
                );
              }
            }
          </Spring>
        </div>

        <div className="checkout-body">
          <Spring
              from={{ top: 80 }}
              to={this.cardTopFromStep('shipping')}
            >
            {
              (props) => {
                return (
                  <div className='checkout-body-card card-1' style={props}>
                    <h2>Shipping</h2>

                    <p>
                      Please select a shipping address for your order.
                    </p>
                  </div>
                );
              }
            }
          </Spring>

          <Spring
              from={{ top: 45 }}
              to={this.cardTopFromStep('payment')}
            >
            {
              (props) => {
                return (
                  <div className='checkout-body-card card-2' style={props}>
                    <h2>Payment</h2>

                    <p>
                      Please pick a payment method.
                    </p>
                  </div>
                );
              }
            }
          </Spring>

          <Spring
              from={{ top: 10 }}
              to={this.cardTopFromStep('confirmation')}
            >
            {
              (props) => {
                return (
                  <div className='checkout-body-card card-3' style={props}>
                    <h2>Confirmation</h2>

                    <p>
                      Please confirm your details.
                    </p>
                  </div>
                );
              }
            }
          </Spring>
        </div>

        <a href='#' onClick={this.handleBackClick} className='btn btn-primary'>Back</a>
        <a href='#' onClick={this.handleContinueClick} className='btn btn-primary'>Continue</a>
      </div>
    );
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('test-animation-mount-point');
  if (mountPoint) {
    ReactDOM.render(<TestAnimation />, mountPoint);
  }
});