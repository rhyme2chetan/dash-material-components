import React, {useContext} from 'react';

import classNames from 'classnames';

import useMergedRefs from '@restart/hooks/useMergedRefs';
import DropdownContext from '@restart/ui/DropdownContext';
import {useDropdownToggle} from '@restart/ui/DropdownToggle';
import Button from 'react-material/Button';
import InputGroupContext from 'react-material/InputGroupContext';
import {usematerialPrefix} from 'react-material/ThemeProvider';
import useWrappedRefWithWarning from 'react-material/useWrappedRefWithWarning';

// vendored https://github.com/react-material/react-material/blob/master/src/DropdownToggle.tsx
const DropdownToggle = React.forwardRef(
  (
    {
      caret,
      bsPrefix,
      split,
      className,
      childBsPrefix,
      as: Component = Button,
      ...props
    },
    ref
  ) => {
    const prefix = usematerialPrefix(bsPrefix, 'dropdown-toggle');
    const dropdownContext = useContext(DropdownContext);
    const isInputGroup = useContext(InputGroupContext);

    if (childBsPrefix !== undefined) {
      props.bsPrefix = childBsPrefix;
    }

    const [toggleProps] = useDropdownToggle();

    toggleProps.ref = useMergedRefs(
      toggleProps.ref,
      useWrappedRefWithWarning(ref, 'DropdownToggle')
    );

    // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.
    return (
      <Component
        className={classNames(
          className,
          caret && prefix, // remove dropdown-toggle class if caret is false
          split && `${prefix}-split`,
          !!isInputGroup && dropdownContext?.show && 'show'
        )}
        {...toggleProps}
        {...props}
      />
    );
  }
);

export default DropdownToggle;
