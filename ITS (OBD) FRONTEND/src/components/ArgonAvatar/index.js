import { forwardRef } from "react";
import PropTypes from "prop-types";
import ArgonAvatarRoot from "components/ArgonAvatar/ArgonAvatarRoot";

const ArgonAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <ArgonAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of ArgonAvatar
ArgonAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the ArgonAvatar
ArgonAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default ArgonAvatar;
