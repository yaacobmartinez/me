import React, { Component } from "react";
import { motion } from 'framer-motion';
import { image } from './animations';
const omit = (obj, omitKey) =>
    Object.keys(obj).reduce((result, key) => {
        if (key !== omitKey) {
            result[key] = obj[key];
        }
        return result;
    }, {});

const overlayStyles = {
    position: "absolute",
    filter: "blur(1px)",
    transition: "opacity ease-in 1000ms",
    clipPath: "inset(0)"
};

export default class ProgressiveImage extends Component {
    constructor(props) {
        super(props);
        this.state = { highResImageLoaded: false };
    }
    render() {
        const { overlaySrc } = this.props;
        const { highResImageLoaded } = this.state;
        let filteredProps = omit(this.props, "overlaySrc");
        return (
            <span>
                <motion.img variants={image} whileHover={{ opacity: 1 }}
                    {...filteredProps}
                    onLoad={() => {
                        this.setState({ highResImageLoaded: true });
                    }}
                    ref={img => {
                        this.highResImage = img;
                    }}
                    src={this.props.src}
                />
                <motion.img variants={image}
                    {...filteredProps}
                    className={`${this.props.className} ${overlayStyles}`}
                    {...highResImageLoaded && { style: { display: "none" } }}
                    src={overlaySrc}
                />
            </span>
        );
    }
}
