import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }
    toggleVisibility() {
        if (window.pageYOffset > 100) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <button onClick={() => this.scrollToTop()}>T</button>
                 )}
            </div>
        );
    }
}
export default Button;