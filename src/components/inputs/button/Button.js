import * as React from 'react';
import {Button as ButtonComponent} from '@mui/material';

const Button = props => {

    const {
      disabled,
      disableElevation,
      disableFocusRipple,
      disableRipple,
      fullWidth,
      sx
    } = props;
  
    return (
        <ButtonComponent
            disabled={disabled}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            sx={sx}
        >
            text
        </ButtonComponent>

    );
}
Button.defaultProps = {
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false
  };
  
Button.propTypes = {

/**
* If true, the component is disabled.
 */
disabled: PropTypes.bool,

/**
 * 	If true, no elevation is used.
 */
disableElevation: PropTypes.bool,

/**
 * If true, the keyboard focus ripple is disabled.
 */
disableFocusRipple: PropTypes.bool,

/**
 * If true, the ripple effect is disabled.
 * Without a ripple there is no styling for :focus-visible by default. 
 * Be sure to highlight the element by applying separate styles with the .Mui-focusVisible class.
 */
disableRipple: PropTypes.bool, 

/**
 * If true, the button will take up the full width of its container.
 */
fullWidth: PropTypes.bool,

/**
 * The system prop that allows defining system overrides as well as additional CSS styles. 
 * See the https://mui.com/system/getting-started/the-sx-prop/ page for more details.
 */
sx: PropTypes.object,
};

export default Button;