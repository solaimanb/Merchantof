import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`mx-auto max-w-[1440px] w-full px-4 lg:px-2 ${className}`}>
      {children}
    </div>
  );
};
