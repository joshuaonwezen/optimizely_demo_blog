import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  useDecision,
} from '@optimizely/react-sdk'

function Header(props) {
  const { sections, title } = props;
  const [ subscribe_decision ] = useDecision('subscribe_button');
  const variationKey = subscribe_decision.variationKey;
  const isEnabled = subscribe_decision.enabled;
  const subscribe_title = subscribe_decision.variables['subscribe_title'];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar id="header" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          { isEnabled &&
            <Button id="subscribe-button" size="small">{subscribe_title}</Button>
          }
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
          {title}
        </Typography>
        <Button id="signup-button" variant="outlined" size="small" onClick={handleClickOpen}>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            id={"section-" + section.title.toLowerCase()}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Dialog id="signup-popup" open={open} onClose={handleClose}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To sign up to the newsletter, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button id="signup-cancel" onClick={handleClose}>Cancel</Button>
          <Button id="signup-accept" onClick={handleClose}>Sign up</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

