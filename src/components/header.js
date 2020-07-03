import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'gatsby';

const Header = ({siteTitle}) => (

    <header>
      <div>
        <AppBar style={{background: '#130000', position: 'fixed', top: 0}}
                position="static">
          <Toolbar>
            {/*<IconButton edge="start"*/}
            {/*            color="inherit" aria-label="menu">*/}
            {/*  <MenuIcon/>*/}
            {/*</IconButton>*/}
            <div className="flex w-100 justify-between items-center">
              <Link to="/" className="link">
                <Typography style={{color: 'white'}} variant="h5">
                  <span role="img" aria-label="fist emoji">✊🏾 </span>Fallen
                </Typography>
              </Link>


              <div>
                {/*<Button startIcon={<AssistantPhotoIcon/>} color="inherit">Become*/}
                {/*  Contributor</Button>*/}
              </div>
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
