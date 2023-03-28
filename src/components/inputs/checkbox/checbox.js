import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Checkbox as CheckboxComponent} from '@mui/material';

/**
 * A self contained Accordion component. Build up the children using the
 * AccordionItem component.
 */
const Checkbox = props => {

  const {
    id,
    options,
    autoComplete,
    autoHighlight,
    autoSelect,
    disablePortal,
    sx
  } = props;

  return (
    <CheckboxComponent
      id={id}
      options={options}
      autoComplete={autoComplete}
      autoHighlight={autoHighlight}
      autoSelect={autoSelect}
      disablePortal={disablePortal}
      sx={sx}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

Checkbox.defaultProps = {
  autoComplete: false,
  autoHighlight: false,
  autoSelect: false,
  disablePortal: false
};

Checkbox.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * Array of options.
   */
  options: PropTypes.oneOfType([
    /**
     * Array of options where the label and the value are the same thing -
     * [string|number]
     */
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    /**
     * An array of options {label: [string|number], value: [string|number]},
     * an optional disabled field can be used for each option
     */
    PropTypes.arrayOf(
      PropTypes.exact({
        /**
         * The options's label
         */
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,

        /**
         * The options's id.
         */
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
      })
    )
  ]),

  /**
   * If true, the portion of the selected suggestion that has not been 
   * typed by the user, known as the completion string, appears inline 
   * after the input cursor in the textbox. The inline completion string 
   * is visually highlighted and has a selected state.
   */
  autoComplete: PropTypes.bool,

  /**
   * 	If true, the first option is automatically highlighted.
   */
  autoHighlight: PropTypes.bool,

  /**
   * If true, the selected option becomes the value of the input when 
   * the Autocomplete loses focus unless the user chooses a different 
   * option or changes the character string in the input.
   */
  autoSelect: PropTypes.bool,

  /**
   * If true, the Popper content will be under the DOM hierarchy of the parent component.
   */
  disablePortal: PropTypes.bool, 

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the https://mui.com/system/getting-started/the-sx-prop/ page for more details.
   */
  sx: PropTypes.object,
};

export default Checkbox;