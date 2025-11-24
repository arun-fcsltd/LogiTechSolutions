import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-700 shadow-md hover:shadow-lg border border-transparent",
    secondary: "bg-brand-dark text-white hover:bg-gray-900 shadow-md border border-transparent",
    outline: "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white",
    ghost: "bg-transparent text-brand-orange hover:bg-orange-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 uppercase tracking-tight">
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-brand-orange mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-l-4 border-transparent hover:border-brand-orange ${className}`}>
      {children}
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-gray-300 mr-2 mb-2">
    {children}
  </span>
);