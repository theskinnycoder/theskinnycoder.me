import { Component } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

export default class SnowAnimation extends Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.state = {
      x: 0,
      screenCenter: 0,
    };
  }

  getMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      screenCenter: window.innerWidth / 2,
    });
  };

  getAnimationSettings() {
    return {
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.3,
      drift: (this.state.x - this.state.screenCenter) / 300,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.999 - 0.2,
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      scalar: randomInRange(0.4, 0.5),
    };
  }

  nextTickAnimation = () => {
    this.animationInstance && this.animationInstance(this.getAnimationSettings());
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  };

  startAnimation = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.getMousePosition);
    this.startAnimation();
  }

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles} />;
  }
}
