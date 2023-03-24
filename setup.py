import io
import os

from setuptools import find_packages, setup

HERE = os.path.dirname(os.path.abspath(__file__))

GITHUB_URL = "https://github.com/rhyme2chetan/dash-material-components.git"


def _get_version():
    """Get version by parsing _version programmatically"""
    version_ns = {}
    with open(
        os.path.join(HERE, "dash_material_components", "_version.py")
    ) as f:
        exec(f.read(), {}, version_ns)
    version = version_ns["__version__"]
    return version


# def _get_long_description():
#     with io.open(os.path.join(HERE, "landing-page.md"), encoding="utf8") as f:
#         return f.read()


setup(
    name="dash-material-components",
    version=_get_version(),
    description="material themed components for use in Plotly Dash",
    long_description=_"Dash version of Material UI",
    long_description_content_type="text/markdown",
    license="Apache Software License",
    author="Faculty",
    author_email="rhyme2chetan@gmail.com",
    url="https://dash-material-components.opensource.ai/",
    project_urls={
        "Bug Reports": os.path.join(GITHUB_URL, "issues"),
        "Source": GITHUB_URL,
    },
    packages=["dash-material-components"],
    install_requires=["dash>=2.0.0"],
    include_package_data=True,
    classifiers=[
        "Framework :: Dash",
        "License :: OSI Approved :: Apache Software License",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
    ],
    extras_require={"pandas": ["numpy", "pandas"]},
    python_requires=">=3.7, <4",
)
