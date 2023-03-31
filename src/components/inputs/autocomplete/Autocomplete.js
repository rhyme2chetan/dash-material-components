import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Autocomplete as AutoCompleteComponent} from '@mui/material';

/**
 * A self contained Accordion component. Build up the children using the
 * AccordionItem component.
 */
const Autocomplete = props => {

  const {
    id,
    options,
    autoComplete,
    autoHighlight,
    autoSelect,
    blurOnSelect,
    ChipProps,
    classes,
    clearIcon,
    clearOnBlur,
    clearOnEscape,
    clearText,
    closeText,
    componentsProps,
    defaultValue,
    disableClearable,
    disableCloseOnSelect,
    disabled,
    disabledItemsFocusable,
    disableListWrap,
    disablePortal,
    filterSelectedOptions,
    forcePopupIcon,
    freeSolo,
    fullWidth,
    handleHomeEndKeys,
    includeInputInList,
    inputValue,
    sx
  } = props;

  const getClearOnBlur = () => {
    return 'freeSolo' in props ? !props.freeSolo : clearOnBlur
  }

  const getDefaultValue = () => {
    return 'multiple' in props ? [] : ('defaultValue' in props ? defaultValue : null) 
  }

  const getHandleHomeEndKeys = () => {
    return 'freeSolo' in props ? !props.freeSolo : handleHomeEndKeys
  }

  return (
    <AutoCompleteComponent
      id={id}
      options={options}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      autoComplete={autoComplete}
      autoHighlight={autoHighlight}
      autoSelect={autoSelect}
      blurOnSelect={blurOnSelect}
      ChipProps={ChipProps}
      classes={classes}
      clearIcon={clearIcon}
      clearOnBlur={getClearOnBlur}
      clearOnEscape={clearOnEscape}
      clearText={clearText}
      closeText={closeText}
      componentsProps={componentsProps}
      defaultValue={getDefaultValue}
      disableClearable={disableClearable}
      disableCloseOnSelect={disableCloseOnSelect}
      disabled={disabled}
      disabledItemsFocusable={disabledItemsFocusable}
      disableListWrap={disableListWrap}
      disablePortal={disablePortal}
      filterOptions={(options, state) => {}}
      filterSelectedOptions={filterSelectedOptions}
      forcePopupIcon={forcePopupIcon}
      freeSolo={freeSolo}
      fullWidth={fullWidth}
      getLimitTagsText={(more) => `+${more}`}
      getOptionDisabled={(option) => false}
      getOptionLabel={(option) => option.label ?? option}
      groupBy={(option) => ""}
      handleHomeEndKeys={getHandleHomeEndKeys}
      includeInputInList={includeInputInList}
      inputValue={inputValue}
      isOptionEqualToValue={(option, value) => false}
      sx={sx}
    />
  );
}

Autocomplete.defaultProps = {
  autoComplete: false,
  autoHighlight: false,
  autoSelect: false,
  blurOnSelect: false,
  clearIcon: <ClearIcon fontSize="small" />,
  clearOnEscape: false,
  clearText: 'Clear',
  closeText: 'Close',
  componentsProps: {},
  disableClearable: false,
  disableCloseOnSelect: false,
  disabled: false,
  disabledItemsFocusable: false,
  disableListWrap: false,
  disablePortal: false,
  filterSelectedOptions: false,
  forcePopupIcon:'auto',
  freeSolo: false,
  fullWidth: false,
  includeInputInList: false,
};

Autocomplete.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string.isRequired,

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
  ]).isRequired,

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
   * Control if the input should be blurred when an option is selected: 
   * - false the input is not blurred. 
   * - true the input is always blurred. 
   * - touch the input is blurred after a touch event. 
   * - mouse the input is blurred after a mouse event.
   */
  blurOnSelect: PropTypes.oneOfType([
    /**
     * - false the input is not blurred. 
     * - true the input is always blurred. 
     */
    PropTypes.bool,
    /**
     * - touch the input is blurred after a touch event. 
     * - mouse the input is blurred after a mouse event.
     */
    PropTypes.string
  ]),

  /**
   * Props applied to the Chip (https://mui.com/material-ui/api/chip/) element.
   */
  ChipProps: PropTypes.object,

  /**
   * Override or extend the styles applied to the component. See CSS 
   * API (https://mui.com/material-ui/api/autocomplete/#css) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The icon to display in place of the default clear icon.
   */
  clearIcon: PropTypes.node,

  /**
   * If true, the input's text is cleared on blur if no value is selected.
   * Set to true if you want to help the user enter a new value. 
   * Set to false if you want to help the user resume their search.
   */
  clearOnBlur: PropTypes.bool, 

  /**
   * If true, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: PropTypes.bool, 

  /**
   * Override the default text for the clear icon button.
   * For localization purposes, you can use the provided 
   * translations(https://mui.com/material-ui/guides/localization/).
   */
  clearText: PropTypes.string,

  /**
   * Override the default text for the close popup icon button.
   * For localization purposes, you can use the provided
   * translations(https://mui.com/material-ui/guides/localization/).
   */
  closeText: PropTypes.string,

  /**
   * The props used for each slot inside.
   * { clearIndicator?: object, paper?: object, popper?: object, popupIndicator?: object }
   */
  componentsProps: PropTypes.object,

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * If true, the input can't be cleared.
   */
  disableClearable: PropTypes.bool, 

  /**
   * If true, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: PropTypes.bool, 

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool, 

  /**
   * If true, will allow focus on disabled items.
   */
  disabledItemsFocusable: PropTypes.bool, 

  /**
   * If true, the list box in the popup will not wrap focus.
   */
  disableListWrap: PropTypes.bool, 

  /**
   * If true, the Popper content will be under the DOM hierarchy of the parent component.
   */
  disablePortal: PropTypes.bool, 

  /**
   * A function that determines the filtered options to be rendered on search.
   * Signature: function(options: Array<T>, state: object) => Array<T>
   * options: The options to render.  
   * state: The state of the component.
   */
  filterOptions: PropTypes.func,

  /**
   * If true, hide the selected options from the list box.
   */
  filterSelectedOptions: PropTypes.bool, 

  /**
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon: PropTypes.oneOfType([
    /**
     * - false the input is not blurred. 
     * - true the input is always blurred. 
     */
    PropTypes.bool,
    /**
     * - touch the input is blurred after a touch event. 
     * - mouse the input is blurred after a mouse event.
     */
    PropTypes.string
  ]),

  /**
   * If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: PropTypes.bool, 

  /**
   * If true, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool, 

  /**
   * The label to display when the tags are truncated (limitTags).
   * Signature: function(more: number) => ReactNode
   * more: The number of truncated tags.
   */
  getLimitTagsText: PropTypes.func,

  /**
   * Used to determine the disabled state for a given option.
   * Signature: function(option: T) => boolean
   * option: The option to test.
   */
  getOptionDisabled: PropTypes.func,

  /**
   * Used to determine the string value for a given option. It's used to fill the input 
   * (and the list box options if renderOption is not provided).
   * If used in free solo mode, it must accept both the type of the options and a string.
   * Signature: function(option: T) => string
   */
  getOptionLabel: PropTypes.func,

  /**
   * If provided, the options will be grouped under the returned string. 
   * The groupBy value is also used as the text for group headings when renderGroup is not provided.
   * Signature: function(options: T) => string
   * options: The options to group.
   */
  groupBy: PropTypes.func,

  /**
   * If true, the component handles the "Home" and "End" keys when the popup is open. 
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys: PropTypes.bool,
  
  /**
   * If true, the highlight can move to the input.
   */
  includeInputInList: PropTypes.bool,

  /**
   * The input value.
   */
  inputValue: propTypes.string,

  /**
   * Used to determine if the option represents the given value. Uses strict equality by default. 
   * Both arguments need to be handled, an option can only match with one value.
   * Signature: function(option: T, value: T) => boolean
   * option: The option to test.
   * value: The value to test against.
   */
  isOptionEqualToValue: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the https://mui.com/system/getting-started/the-sx-prop/ page for more details.
   */
  sx: PropTypes.object,
};

export default Autocomplete;