import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Button = ({ 
  text, 
  variant = "primary", 
  size = "md", 
  icon = null, 
  iconPosition = "left", 
  addClass = "",
  disabled = false,
  onClick 
}) => {
  // Tailwind classes for variants
  const variants = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300",
    secondary: "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-300",
    warning: "text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700",
  };

  // Tailwind classes for sizes
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base-xl px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const baseClasses = `font-medium rounded-lg
                       focus:outline-none focus:ring-2 transition
                       ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${addClass}
                       ${disabled ? "px-4 py-2 rounded-md cursor-not-allowed opacity-70" : ""}`;

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className="mr-2" />
      )}
      {text}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className="ml-2" />
      )}
    </button>
  );
};

// Prop validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "warning"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  addClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
