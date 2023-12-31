import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
  const { archives, description, title } = props;

  return (
    <Grid item xs={12} md={4} id="sidebar">
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }} id="about">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <div id="archives">
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Archives
        </Typography>
        {archives.map((archive) => (
          <Link display="block" variant="body1" href={archive.url} key={archive.title}>
            {archive.title}
          </Link>
        ))}
      </div>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
