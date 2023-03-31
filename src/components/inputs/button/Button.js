import * as React from 'react';
import {Button as ButtonComponent} from '@mui/material';

const Button = props => {

    const {
      disabled,
      disableElevation,
      disableFocusRipple,
      disableRipple,
      fullWidth,
      sx,
      variant,
      color,
      btnValue,
      id,
      children,
      classes,
      component,
      endIcon,
      href,
      size,
      startIcon
    } = props;
  
    return (
        <ButtonComponent
            disabled={disabled}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            sx={sx}
            variant={variant}
            color={color}
            id={id}
            children={children}
            classes={classes}
            component={component}
            endIcon={endIcon}
            href={href}
            size={size}
            startIcon={startIcon}
        >
            {btnValue}
        </ButtonComponent>

    );
}
Button.defaultProps = {
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    variant: "text",
    color: "primary",
    btnValue: "",
    size: "medium"
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

/**	The variant to use. */
variant: PropTypes.string,

/**
 * The color of the component. It supports both default and custom theme colors,
 * which can be added as shown in the https://mui.com/material-ui/customization/palette/#adding-new-colors. 
 */
color: PropTypes.string,

/**
 * it shows the button text
 */
btnValue: PropTypes.string,

/**
 * The ID of this component, used to identify dash components
 * in callbacks. The ID needs to be unique across all of the
 * components in an app.
*/
id: PropTypes.string,

/**
 * The content of the component.
 */
children: PropTypes.node,

/**
 * Override or extend the styles applied to the component. See https://mui.com/material-ui/api/button/#css below for more details.
 */
classes: PropTypes.object,

/**
 * The component used for the root node. Either a string to use a HTML element or a component.
 */
component: PropTypes.node,

/**
 * Element placed after the children.
*/
endIcon: PropTypes.node,

/**
 * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
 */
href: PropTypes.string,

/**
 * The size of the component. small is equivalent to the dense button styling.
 */
size: PropTypes.string,

/**
 * Element placed before the children.
 */
startIcon: PropTypes.node,
};

export default Button;