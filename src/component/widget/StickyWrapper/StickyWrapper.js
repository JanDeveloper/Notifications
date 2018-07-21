import React from "react";
import PropTypes from "prop-types";

export default class StickyWrapper extends React.Component {

    static propTypes = {
        children: PropTypes.element,
        componentClassName: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            mobileView: true,
            isSticky: false
        };
    }

    componentDidMount() {
        this.getViewportWidth();
        window.addEventListener("resize", this.getViewportWidth);
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.getViewportWidth);
    }

    handleScroll = () => {
        const scrollDistance = window.scrollY;
        const isSticky = this.state.mobileView
            ? scrollDistance > 20
            : scrollDistance > 0;
        this.setState({ isSticky });
    };

    render() {
        const { children, componentClassName } = this.props;
        const setAdditionalClassName = componentClassName
            ? `${componentClassName} ${componentClassName}--sticky`
            : "";
        const setStickyClass = this.state.isSticky
            ? `sticky-container sticky-container--sticky ${setAdditionalClassName}`
            : `sticky-container ${componentClassName}`;
        return (
            <div
                className={setStickyClass}
            >
                {children}
            </div>);
    }

    getViewportWidth = () => {
        const innerWidth = Math.min(window.innerWidth, screen.width);
        const mobileView = innerWidth < 769;
        this.setState({ mobileView });
    };
}
