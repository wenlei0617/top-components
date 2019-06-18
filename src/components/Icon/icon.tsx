import * as React from "react";
import "./icon.scss";
import * as Proptypes from "prop-types";

interface Iprops {
  readonly name: string;
  readonly fill?: string;
  readonly spin?: boolean;
  readonly style?: React.CSSProperties;
}

const loadSvg = (name: string) => {
  const info = require(`./svg/${name}.svg`).default;
  return info;
};

const Icon = (props: Iprops) => {
  const { name, fill, spin, style = {}, ...rest } = props;
  const iconInfo = loadSvg(name);
  return (
    <i {...rest}>
      <svg
        style={style}
        data-spin={spin}
        className="topC-icon"
        viewBox={`${iconInfo.viewBox}`}
        fill={fill}>
        <use xlinkHref={`#${iconInfo.id}`} />
      </svg>
    </i>
  );
};

Icon.displayName = "Icon";

Icon.prototype = {
  name: Proptypes.string,
  style: Proptypes.object,
  spin: Proptypes.bool
};
Icon.defaultProps = {
  fill: "#fff",
  spin: false,
  style: {
    fontSize: 16
  }
};
export default Icon;
