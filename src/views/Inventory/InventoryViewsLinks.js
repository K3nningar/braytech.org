import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import { removeMemberIds } from '../../utils/paths';
import { ProfileNavLink } from '../../components/ProfileLink';
import ObservedImage from '../../components/ObservedImage';

class InventoryViewsLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { t } = this.props;

    return (
      <div className='module views'>
        <ul className='list'>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/01A3-00001DB5.PNG' />
            </div>
            <ProfileNavLink to='/inventory' isActive={(match, location) => {
              if (['/inventory', '/inventory/pursuits'].includes(removeMemberIds(location.pathname)) || removeMemberIds(location.pathname).includes('/inventory/pursuits')) {
                return true;
              } else {
                return false;
              }
            }} />
          </li>
          <li className='linked'>
            <div className='icon'>
              <ObservedImage className='image' src='/static/images/extracts/ui/01E3-00001080.PNG' />
            </div>
            <ProfileNavLink to='/inventory/consumables' />
          </li>
        </ul>
      </div>
    );
  }
}

export default compose(
  connect(),
  withNamespaces()
)(InventoryViewsLinks);