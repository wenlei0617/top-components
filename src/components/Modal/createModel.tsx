import * as React from "react";
import * as ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./styles/model.scss";
interface Iprops {
  visible?: boolean; // 是否可见
  children?: React.ReactNode;
}

interface IcontainerProps {
  current: HTMLDivElement | null;
}

const Modal = (props: Iprops) => {
  const { visible, children } = props;
  const ContainerRef: IcontainerProps = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ContainerRef.current) {
      visible
        ? (ContainerRef.current.style.zIndex = "1000")
        : (ContainerRef.current.style.zIndex = "-1000");
    }
  }, [visible]);
  const createContainer = () => {
    if (!ContainerRef.current) {
      const node = document.createElement("div");
      node.setAttribute("class", "topC-modal-container");
      ContainerRef.current = node;
      document.body.appendChild(node);
    }
    return ContainerRef.current;
  };
  if (!visible) {
    if (!ContainerRef.current) {
      return null;
    }
  }
  return ReactDom.createPortal(children, createContainer());
};
Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node
};
Modal.defaultProps = {
  visible: false,
  closable: false
};

export default Modal;
