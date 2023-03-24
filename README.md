<p align="center">
  <a href="https://dash-material-components.opensource.faculty.ai/">
    <img src="https://cdn.opensource.faculty.ai/dbc/assets/logo.svg" alt="dash-material-components logo" width="200" height="200">
  </a>
</p>

<h3 align="center">Dash material Components</h3>

<p align="center">
  material components for Plotly Dash
  <br>
  <a href="https://dash-material-components.opensource.faculty.ai/">Explore the documentation</a>
  ·
  <a href="https://github.com/facultyai/dash-material-components/issues/new?template=bug.md">Report a bug</a>
  ·
  <a href="https://github.com/facultyai/dash-material-components/issues/new?template=feature.md">Request a feature</a>
  <br>
  <br>
  <img alt="GitHub Actions" src="https://github.com/facultyai/dash-material-components/workflows/Tests/badge.svg?branch=main">
  <img alt="GitHub" src="https://img.shields.io/github/license/facultyai/dash-material-components">
  <img alt="PyPI" src="https://img.shields.io/pypi/v/dash-material-components">
  <img alt="Conda (channel only)" src="https://img.shields.io/conda/vn/conda-forge/dash-material-components">
  <img alt="PyPI - Python Version" src="https://img.shields.io/pypi/pyversions/dash-material-components">
</p>

_dash-material-components_ is a library of [material][material-homepage]
components for use with [Plotly Dash][dash-homepage], that makes it easier to
build consistently styled Dash apps with complex, responsive layouts.

## Table of contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Installation

### PyPI

You can install _dash-material-components_ with `pip`:

```sh
pip install dash-material-components
```

### Anaconda

You can also install _dash-material-components_ with `conda` through the
conda-forge channel:

```sh
conda install -c conda-forge dash-material-components
```

### Dash for R

You can now use _dash-material-components_ with Dash for R! To get started make sure you have the _devtools_ library installed

```r
install.packages("devtools")
```

You can then install _dash-material-components_ from the `r-release` branch of this repository.

```r
library(devtools)
install_github('facultyai/dash-material-components@r-release')
```

Check out [the docs for more details](https://dash-material-components.opensource.faculty.ai/docs/quickstart)

### Dash.jl

You can also use _dash-material-components_ with Dash.jl! Install with

```jl
pkg> add DashmaterialComponents
```

Check out [the docs for more details](https://dash-material-components.opensource.faculty.ai/docs/quickstart)

## Quick start

To use _dash-material-components_ you must do two things:

- Link a material v5 compatible stylesheet
- Incorporate _dash-material-components_ into your layout

### Linking a stylesheet

_dash-material-components_ doesn't come with CSS included. This is to give you
the freedom to use any material v5 stylesheet of your choice. This means
however that in order for the components to be styled properly, you must link
to a stylesheet yourself.

For convenience, links to [materialCDN][materialcdn] for each theme are
available through the `themes` module, which can be used as follows:

```python
import dash
import dash_material_components as dbc

app = dash.Dash(external_stylesheets=[dbc.themes.material])
```

For more information on how to link local or external CSS, check out the
[Dash documentation][dash-docs-external].

### Build the layout

With CSS linked, you can start building your app's layout with our material
components. See our [_documentation_][docs-components] for a full list of
available components, which include:

#### Standard row and column-based layouts

![layout](./readme-images/layout.png)

---

#### Cards

![cards](./readme-images/cards.png)

---

#### Tabs

![tabs](./readme-images/tabs.png)

---

#### Forms

![forms](./readme-images/forms.png)

---

#### Dropdown menus

<img src="./readme-images/dropdown.png" width="200"/>

---

#### Tooltips

<img src="./readme-images/tooltips.png" width="400"/>

... and many more.

## Contributing

We welcome contributions to _dash-material-components_. If you find a bug or
something is unclear please [submit a bug report][bug-report], if you have ideas
for new features please feel free to make a [feature request][feature-request].

If you would like to submit a pull request, please read our
[contributing guide][contribution-guide], which contains instructions on how to
build and install _dash-material-components_ locally, how to check your code
will pass our linting checks, and how to submit the pull request itself.

## Copyright and license

Code and documentation is copyright [Faculty Science Ltd.][faculty]
2018-2022, and released under the [Apache 2.0 license](./LICENSE)

[dash-homepage]: https://dash.plotly.com/
[dash-docs-external]: https://dash.plotly.com/external-resources
[material-homepage]: https://getmaterial.com/
[dbc-repo]: https://github.com/facultyai/dash-material-components
[reactstrap-homepage]: https://reactstrap.github.io/
[docs-homepage]: https://dash-material-components.opensource.faculty.ai
[docs-components]: https://dash-material-components.opensource.faculty.ai/l/components
[materialcdn]: https://www.materialcdn.com/
[faculty]: https://faculty.ai
[bug-report]: https://github.com/facultyai/dash-material-components/issues/new?template=bug.md
[feature-request]: https://github.com/facultyai/dash-material-components/issues/new?template=feature.md
[contribution-guide]: https://github.com/facultyai/dash-material-components/blob/main/.github/CONTRIBUTING.md
