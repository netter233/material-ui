import * as React from 'react';
import { styled } from '@material-ui/core/styles';
const PREFIX = 'Anonymous';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {},
});

export default ((props) => {
  const { } = props;
  return <Root className={classes.root}>Anonymous</Root>;
});
