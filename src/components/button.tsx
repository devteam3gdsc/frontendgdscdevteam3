import React from 'react';
import { Link } from 'react-router';

type ButtonProps = {
  variant: string;
};

function Button({ variant }: ButtonProps) {
  const Style: { [key: string]: string } = {
    signin:
      'w-24 h-8 rounded-xl bg-white text-xl text-Primary/Dark m-3 hover:bg-Primary/Dark hover:text-white',
    signup:
      'w-24 h-8 rounded-xl bg-Accent/Target text-xl text-white m-3 hover:bg-white hover:text-Accent/Target',
  };
  const Action: { [key: string]: string } = {
    signin: '\signin',
    signup: '\signup',
  };
  const Text: { [key: string]: string } = {
    signin: 'Sign in',
    signup: 'Sign up',
  };

  return (
    <Link to={`${Action[variant]}`}>
      <button className={`${Style[variant]}`}>{Text[variant]}</button>
    </Link>
  );
}

export default Button;
