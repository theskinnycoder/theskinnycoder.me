import { Component } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import CopyToClipboard from 'react-copy-to-clipboard';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

export default class CopyCode extends Component {
  constructor(props) {
    super(props);
    this.animationInstance = null;
    this.state = {
      x: 0,
      y: 0,
      screenWidth: 0,
      screenHeight: 0,
    };
  }

  getMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
      screenHeight: window?.innerHeight,
      screenWidth: window?.innerWidth,
    });
  };

  componentDidMount() {
    window?.addEventListener('mousemove', this.getMousePosition);
  }

  componentWillUnmount() {
    window?.removeEventListener('mousemove', this.getMousePosition);
  }

  makeShot = (particleRatio, opts) => {
    this.animationInstance &&
      this.animationInstance({
        ...opts,
        origin: {
          x: this.state.x / this.state.screenWidth,
          y: this.state.y / this.state.screenHeight,
        },
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  fire = () => {
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  handlerFire = () => {
    this.fire();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  render() {
    const { content, isCopied, setIsCopied } = this.props;
    return (
      <>
        <CopyToClipboard
          text={content}
          onCopy={() => {
            setIsCopied(!isCopied);
            setTimeout(() => {
              setIsCopied(false);
            }, 3000);
          }}
          className="focus:outline-none focus-within:outline-none md:pt-1.5 pt-2.5 outline-none"
        >
          <button onClick={this.handlerFire}>
            {isCopied ? (
              <span className="hover:bg-brand-divide dark:text-white dark:hover:text-black p-1 text-sm font-medium text-black rounded">
                Copied!
              </span>
            ) : (
              <span className="hover:bg-brand-divide dark:text-white dark:hover:text-black p-1 text-sm font-medium text-black rounded">
                Copy
              </span>
            )}
          </button>
        </CopyToClipboard>
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          style={canvasStyles}
        />
      </>
    );
  }
}
