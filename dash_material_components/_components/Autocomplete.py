# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Autocomplete(Component):
    """An Autocomplete component.
A self contained Accordion component. Build up the children using the
AccordionItem component.

Keyword arguments:

- id (optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- ChipProps (optional):
    Props applied to the Chip (https://mui.com/material-ui/api/chip/)
    element.

- autoComplete (default False):
    If True, the portion of the selected suggestion that has not been
    typed by the user, known as the completion string, appears inline
    after the input cursor in the textbox. The inline completion
    string  is visually highlighted and has a selected state.

- autoHighlight (default False):
    If True, the first option is automatically highlighted.

- autoSelect (default False):
    If True, the selected option becomes the value of the input when
    the Autocomplete loses focus unless the user chooses a different
    option or changes the character string in the input.

- blurOnSelect (default False):
    Control if the input should be blurred when an option is selected:
    - False the input is not blurred.  - True the input is always
    blurred.  - touch the input is blurred after a touch event.  -
    mouse the input is blurred after a mouse event.

- classes (optional):
    Override or extend the styles applied to the component. See CSS
    API (https://mui.com/material-ui/api/autocomplete/#css) below for
    more details.

- clearIcon (default <ClearIcon fontSize="small" />):
    The icon to display in place of the default clear icon.

- clearOnBlur (optional):
    If True, the input's text is cleared on blur if no value is
    selected. Set to True if you want to help the user enter a new
    value.  Set to False if you want to help the user resume their
    search.

- clearOnEscape (default False):
    If True, clear all values when the user presses escape and the
    popup is closed.

- clearText (default 'Clear'):
    Override the default text for the clear icon button. For
    localization purposes, you can use the provided
    translations(https://mui.com/material-ui/guides/localization/).

- closeText (default 'Close'):
    Override the default text for the close popup icon button. For
    localization purposes, you can use the provided
    translations(https://mui.com/material-ui/guides/localization/).

- componentsProps (optional):
    The props used for each slot inside. { clearIndicator?: object,
    paper?: object, popper?: object, popupIndicator?: object }.

- defaultValue (optional):
    The default value. Use when the component is not controlled.

- disableClearable (default False):
    If True, the input can't be cleared.

- disableCloseOnSelect (default False):
    If True, the popup won't close when a value is selected.

- disableListWrap (default False):
    If True, the list box in the popup will not wrap focus.

- disablePortal (default False):
    If True, the Popper content will be under the DOM hierarchy of the
    parent component.

- disabled (default False):
    If True, the component is disabled.

- disabledItemsFocusable (default False):
    If True, will allow focus on disabled items.

- filterOptions (optional):
    A function that determines the filtered options to be rendered on
    search. Signature: function(options: Array<T>, state: object) =>
    Array<T> options: The options to render.   state: The state of the
    component.

- filterSelectedOptions (default False):
    If True, hide the selected options from the list box.

- forcePopupIcon (default 'auto'):
    Force the visibility display of the popup icon.

- freeSolo (default False):
    If True, the Autocomplete is free solo, meaning that the user
    input is not bound to provided options.

- fullWidth (default False):
    If True, the input will take up the full width of its container.

- getLimitTagsText (optional):
    The label to display when the tags are truncated (limitTags).
    Signature: function(more: number) => ReactNode more: The number of
    truncated tags.

- getOptionDisabled (optional):
    Used to determine the disabled state for a given option.
    Signature: function(option: T) => boolean option: The option to
    test.

- getOptionLabel (optional):
    Used to determine the string value for a given option. It's used
    to fill the input  (and the list box options if renderOption is
    not provided). If used in free solo mode, it must accept both the
    type of the options and a string. Signature: function(option: T)
    => string.

- groupBy (optional):
    If provided, the options will be grouped under the returned
    string.  The groupBy value is also used as the text for group
    headings when renderGroup is not provided. Signature:
    function(options: T) => string options: The options to group.

- handleHomeEndKeys (optional):
    If True, the component handles the \"Home\" and \"End\" keys when
    the popup is open.  It should move focus to the first option and
    last option, respectively.

- includeInputInList (default False):
    If True, the highlight can move to the input.

- inputValue (optional):
    The input value.

- isOptionEqualToValue (optional):
    Used to determine if the option represents the given value. Uses
    strict equality by default.  Both arguments need to be handled, an
    option can only match with one value. Signature: function(option:
    T, value: T) => boolean option: The option to test. value: The
    value to test against.

- options (optional):
    Array of options.

- sx (optional):
    The system prop that allows defining system overrides as well as
    additional CSS styles.  See the
    https://mui.com/system/getting-started/the-sx-prop/ page for more
    details."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, options=Component.UNDEFINED, autoComplete=Component.UNDEFINED, autoHighlight=Component.UNDEFINED, autoSelect=Component.UNDEFINED, blurOnSelect=Component.UNDEFINED, ChipProps=Component.UNDEFINED, classes=Component.UNDEFINED, clearIcon=Component.UNDEFINED, clearOnBlur=Component.UNDEFINED, clearOnEscape=Component.UNDEFINED, clearText=Component.UNDEFINED, closeText=Component.UNDEFINED, componentsProps=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disableClearable=Component.UNDEFINED, disableCloseOnSelect=Component.UNDEFINED, disabled=Component.UNDEFINED, disabledItemsFocusable=Component.UNDEFINED, disableListWrap=Component.UNDEFINED, disablePortal=Component.UNDEFINED, filterOptions=Component.UNDEFINED, filterSelectedOptions=Component.UNDEFINED, forcePopupIcon=Component.UNDEFINED, freeSolo=Component.UNDEFINED, fullWidth=Component.UNDEFINED, getLimitTagsText=Component.UNDEFINED, getOptionDisabled=Component.UNDEFINED, getOptionLabel=Component.UNDEFINED, groupBy=Component.UNDEFINED, handleHomeEndKeys=Component.UNDEFINED, includeInputInList=Component.UNDEFINED, inputValue=Component.UNDEFINED, isOptionEqualToValue=Component.UNDEFINED, sx=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'ChipProps', 'autoComplete', 'autoHighlight', 'autoSelect', 'blurOnSelect', 'classes', 'clearIcon', 'clearOnBlur', 'clearOnEscape', 'clearText', 'closeText', 'componentsProps', 'defaultValue', 'disableClearable', 'disableCloseOnSelect', 'disableListWrap', 'disablePortal', 'disabled', 'disabledItemsFocusable', 'filterOptions', 'filterSelectedOptions', 'forcePopupIcon', 'freeSolo', 'fullWidth', 'getLimitTagsText', 'getOptionDisabled', 'getOptionLabel', 'groupBy', 'handleHomeEndKeys', 'includeInputInList', 'inputValue', 'isOptionEqualToValue', 'options', 'sx']
        self._type = 'Autocomplete'
        self._namespace = 'dash_material_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'ChipProps', 'autoComplete', 'autoHighlight', 'autoSelect', 'blurOnSelect', 'classes', 'clearIcon', 'clearOnBlur', 'clearOnEscape', 'clearText', 'closeText', 'componentsProps', 'defaultValue', 'disableClearable', 'disableCloseOnSelect', 'disableListWrap', 'disablePortal', 'disabled', 'disabledItemsFocusable', 'filterOptions', 'filterSelectedOptions', 'forcePopupIcon', 'freeSolo', 'fullWidth', 'getLimitTagsText', 'getOptionDisabled', 'getOptionLabel', 'groupBy', 'handleHomeEndKeys', 'includeInputInList', 'inputValue', 'isOptionEqualToValue', 'options', 'sx']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Autocomplete, self).__init__(**args)
