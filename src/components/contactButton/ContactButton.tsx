import React, { HTMLAttributes } from 'react';
import './ContactButton.scss';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const ContactButton = ({ className }: Props) => {
    return (
        <div className={`ContactButton ${className}`}>
            <button className="button is-rounded is-uppercase has-text-weight-medium" >Contact</button>
        </div>
    );
};

export default ContactButton;