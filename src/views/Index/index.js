import React from 'react';
import ObservedImage from '../../components/ObservedImage';

import './styles.css';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  componentDidMount() {
    this.props.setPageDefault('light');
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.setPageDefault(false);
  }

  render() {
    

    return (
      <div className='view' id='index'>
        <ObservedImage className='image bg' src='/static/images/blur_wall.jpg' />
        <div className='logo-feature'>
          <div className='device'><span className='destiny-clovis_bray_device' /></div>
          Braytech
        </div>
      </div>
    );
  }
}

export default Index;
