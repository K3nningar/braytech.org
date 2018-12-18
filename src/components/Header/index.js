import React from 'react';

import './styles.css';

import StandardHeader from '../StandardHeader';
import ProfileHeader from '../ProfileHeader';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const views = [
      {
        name: 'Clan',
        desc: 'Activity and statistics',
        slug: '/clan',
        exact: false
      },
      {
        name: 'Collections',
        desc: 'Items your Guardian has acquired',
        slug: '/collections',
        exact: false
      },
      {
        name: 'Triumphs',
        desc: "Records of your Guardian's achievements",
        slug: '/triumphs',
        exact: false
      },
      {
        name: 'Checklists',
        desc: 'Made a list, check it twice',
        slug: '/checklists',
        exact: true
      },
      {
        name: 'Overview',
        desc: "Bird's eye view of your progress",
        slug: '/overview',
        exact: true
      },
      {
        name: 'This Week',
        desc: 'Prestigious records and valued items up for grabs this week',
        slug: '/this-week',
        exact: true
      },
      {
        name: 'Vendors',
        desc: "Tracking what's in stock across the Jovians",
        slug: '/vendors',
        exact: false
      }
    ];

    let standard = ['/character-select', '/pride', '/credits']

    if (this.props.user.response && this.props.user.characterId && this.props.route.location.pathname !== '/' && !standard.includes(this.props.route.location.pathname)) {
      return <ProfileHeader {...this.props.route} {...this.props.user} viewport={this.props.viewport} manifest={this.props.manifest} views={views} />;
    } else {
      return <StandardHeader {...this.props.user} viewport={this.props.viewport} views={views} />;
    }
  }
}

export default Header;