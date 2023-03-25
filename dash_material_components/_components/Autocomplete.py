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

- disablePortal (default False):
    If True, the Popper content will be under the DOM hierarchy of the
    parent component.

- options (optional):
    Array of options.

- sx (optional):
    The system prop that allows defining system overrides as well as
    additional CSS styles.  See the
    https://mui.com/system/getting-started/the-sx-prop/ page for more
    details."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, options=Component.UNDEFINED, autoComplete=Component.UNDEFINED, autoHighlight=Component.UNDEFINED, autoSelect=Component.UNDEFINED, disablePortal=Component.UNDEFINED, sx=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'autoComplete', 'autoHighlight', 'autoSelect', 'disablePortal', 'options', 'sx']
        self._type = 'Autocomplete'
        self._namespace = 'dash_material_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'autoComplete', 'autoHighlight', 'autoSelect', 'disablePortal', 'options', 'sx']
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
