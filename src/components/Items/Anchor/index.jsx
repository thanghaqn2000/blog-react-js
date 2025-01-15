import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Anchor = ({
  href,
  text,
  variant = "primary",
  size = "md",
  klassName = "",
  onMouseEnter,
  onMouseLeave,
  onClick,
  icon, // Prop mới cho icon Font Awesome
  iconPosition = "left", // Định vị icon: "left" hoặc "right"
}) => {
  // Define Tailwind classes for different variants and sizes
  const variants = {
    primary: "text-blue-600 hover:text-blue-800 focus:ring-blue-300",
    secondary: "text-gray-600 hover:text-gray-800 focus:ring-gray-300",
    danger: "text-red-600 hover:text-red-800 focus:ring-red-300",
  };

  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const baseClasses =
    "inline-block font-bold focus:outline-none focus:ring-2 rounded transition";

  // Compose final class string
  const finalClasses = `${baseClasses} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${klassName}`;

  return (
    <a
      href={href}
      className={finalClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Hiển thị icon nếu được cung cấp */}
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className="me-2" />
      )}
      {text}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className="ms-2" />
      )}
    </a>
  );
};

export default Anchor;
