import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({siteTitle}) => (

    <header>
      <div>
        <AppBar style={{ background: '#333', position: 'fixed', top: 0}} position="static">
          <Toolbar>
            {/*<IconButton edge="start"*/}
            {/*            color="inherit" aria-label="menu">*/}
            {/*  <MenuIcon/>*/}
            {/*</IconButton>*/}
            <div className="flex w-100 justify-between">
              <Typography variant="h6">
                Justice for the Fallen
              </Typography>
              {/*<div>*/}
              {/*  <Button color="inherit">Button 1</Button>*/}
              {/*  <Button color="inherit">Button 2</Button>*/}
              {/*</div>*/}
            </div>

          </Toolbar>
        </AppBar>
      </div>
    </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
