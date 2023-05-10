import React from 'react';
import {iconDefs, IconTypes} from "./icons";

interface Props {
    type: IconTypes,
    className?: string,
    color?: string,
    size?: string | number,
    [rest:string]: any;
}

const IconComponent = (props: Props) => {

    const icon = iconDefs[props.type];
    if (!icon) return null;

    const {className, color, size, ...rest} = props;

    const style = {
        color: color,
        fontSize: size
    }

    return (
        <svg
            className={className}
            height={icon.height}
            width={icon.width}
            viewBox={icon.viewBox}
            style={style}
            {...rest}
        >
            {icon.body}
        </svg>
    );
};

export default IconComponent;
