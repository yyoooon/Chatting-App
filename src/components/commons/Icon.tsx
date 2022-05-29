import React from 'react';
import styled from '@emotion/styled';

interface IconPropsType extends React.ComponentProps<'img'> {
  src: string;
  onClick?: (e?: React.MouseEvent) => void;
}

const Icon = ({ src, alt, onClick, ...props }: IconPropsType): JSX.Element => {
  const handleClick: React.MouseEventHandler = () => {
    onClick && onClick();
  };

  return (
    <IconContainer onClick={handleClick} {...props}>
      <img src={src} alt={alt}></img>
    </IconContainer>
  );
};

export default Icon;

const IconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
