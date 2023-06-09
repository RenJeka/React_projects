import {ReactComponentElement} from "react";

interface Icon {
    className?: string,
    viewBox?: string,
    width?: string,
    height?: string,
    body?: ReactComponentElement<any>
}

interface IconDefs {
    [iconName: string]: Icon
}


export enum IconTypes {
    PLUS = 'plus',
    CROSS = 'cross',
    CHECKMARK = 'checkmark',
}

export const iconDefs: IconDefs = {
    [IconTypes.PLUS]: {
        className: 'icon icon-plus',
        viewBox: '0 0 512 512',
        width: '1em',
        height: '1em',
        body: (
            <path d="M496 192h-176v-176c0-8.836-7.164-16-16-16h-96c-8.836 0-16 7.164-16 16v176h-176c-8.836 0-16 7.164-16 16v96c0 8.836 7.164 16 16 16h176v176c0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16v-176h176c8.836 0 16-7.164 16-16v-96c0-8.836-7.164-16-16-16z"></path>
        )
    },
    [IconTypes.CROSS]: {
        className: 'icon icon-cross',
        viewBox: '0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
                <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
        )
    },
    [IconTypes.CHECKMARK]: {
        className: 'icon icon-checkmark',
        viewBox: '0 0 32 32',
        width: '1em',
        height: '1em',
        body: (
            <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
        )
    }
};
