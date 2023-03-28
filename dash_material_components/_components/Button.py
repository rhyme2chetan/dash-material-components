# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.


Keyword arguments:

- color (default primary):
    The color of the component. It supports both default and custom
    theme colors, which can be added as shown in the
    https://mui.com/material-ui/customization/palette/#adding-new-colors.

- disableElevation (default False):
    If True, no elevation is used.

- disableFocusRipple (default False):
    If True, the keyboard focus ripple is disabled.

- disableRipple (default False):
    If True, the ripple effect is disabled. Without a ripple there is
    no styling for :focus-visible by default.  Be sure to highlight
    the element by applying separate styles with the .Mui-focusVisible
    class.

- disabled (default False):
    If True, the component is disabled.

- fullWidth (default False):
    If True, the button will take up the full width of its container.

- sx (optional):
    The system prop that allows defining system overrides as well as
    additional CSS styles.  See the
    https://mui.com/system/getting-started/the-sx-prop/ page for more
    details.

- variant (default text):
    The variant to use."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_material_components'
    _type = 'Button'
    @_explicitize_args
    def __init__(self, disabled=Component.UNDEFINED, disableElevation=Component.UNDEFINED, disableFocusRipple=Component.UNDEFINED, disableRipple=Component.UNDEFINED, fullWidth=Component.UNDEFINED, sx=Component.UNDEFINED, variant=Component.UNDEFINED, color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['color', 'disableElevation', 'disableFocusRipple', 'disableRipple', 'disabled', 'fullWidth', 'sx', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['color', 'disableElevation', 'disableFocusRipple', 'disableRipple', 'disabled', 'fullWidth', 'sx', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Button, self).__init__(**args)
