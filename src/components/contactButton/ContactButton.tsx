import React, { HTMLAttributes } from 'react';
import './ContactButton.scss';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const ContactButton = ({ className }: Props) => {
    return (
        <div className={`ContactButton ${className}`}>
            <a href="#contact"> <button type="button" className="button is-rounded is-uppercase has-text-weight-medium">
                Contact
            </button>
            </a>
        </div>
    );
};

export default ContactButton;