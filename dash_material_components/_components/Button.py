# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.


Keyword arguments:

- children (optional):
    The content of the component.

- id (optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- btnValue (default ""):
    it shows the button text.

- classes (optional):
    Override or extend the styles applied to the component. See
    https://mui.com/material-ui/api/button/#css below for more
    details.

- color (default "primary"):
    The color of the component. It supports both default and custom
    theme colors, which can be added as shown in the
    https://mui.com/material-ui/customization/palette/#adding-new-colors.

- component (optional):
    The component used for the root node. Either a string to use a
    HTML element or a component.

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

- endIcon (optional):
    Element placed after the children.

- fullWidth (default False):
    If True, the button will take up the full width of its container.

- href (optional):
    The URL to link to when the button is clicked. If defined, an a
    element will be used as the root node.

- size (default "medium"):
    The size of the component. small is equivalent to the dense button
    styling.

- startIcon (optional):
    Element placed before the children.

- sx (optional):
    The system prop that allows defining system overrides as well as
    additional CSS styles.  See the
    https://mui.com/system/getting-started/the-sx-prop/ page for more
    details.

- variant (default "text"):
    The variant to use."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_material_components'
    _type = 'Button'
    @_explicitize_args
    def __init__(self, children=None, disabled=Component.UNDEFINED, disableElevation=Component.UNDEFINED, disableFocusRipple=Component.UNDEFINED, disableRipple=Component.UNDEFINED, fullWidth=Component.UNDEFINED, sx=Component.UNDEFINED, variant=Component.UNDEFINED, color=Component.UNDEFINED, btnValue=Component.UNDEFINED, id=Component.UNDEFINED, classes=Component.UNDEFINED, component=Component.UNDEFINED, endIcon=Component.UNDEFINED, href=Component.UNDEFINED, size=Component.UNDEFINED, startIcon=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'btnValue', 'classes', 'color', 'component', 'disableElevation', 'disableFocusRipple', 'disableRipple', 'disabled', 'endIcon', 'fullWidth', 'href', 'size', 'startIcon', 'sx', 'variant']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'btnValue', 'classes', 'color', 'component', 'disableElevation', 'disableFocusRipple', 'disableRipple', 'disabled', 'endIcon', 'fullWidth', 'href', 'size', 'startIcon', 'sx', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Button, self).__init__(children=children, **args)
