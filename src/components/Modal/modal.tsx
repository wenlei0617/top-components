import * as React from "react";
import CreateModal from "./createModel";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import "./styles/model.scss";
import { buttonType } from "../Button/button";

export interface IheadProps {
  title?: string;
  header?: React.ReactNode;
  closable?: boolean; // 是否显示右上角的关闭按钮
  onCancel?: () => void; // 取消回调
}
export interface IfooterProps {
  footer?: React.ReactNode;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;
  okType?: buttonType;
  confirmLoading?: boolean; // 确认按钮 loading
  onOk?: () => void; // 点击确定回调
  onCancel?: () => void; // 取消回调
}

export interface Iprops extends IheadProps, IfooterProps {
  width?: boolean;
  visible?: boolean;
  zIndex?: number;
  children: React.ReactNode;
}
const renderHeader = (props: IheadProps) => {
  const { header, title, closable, onCancel } = props;
  if (header) {
    return header;
  }
  return (
    <div className="topC-modal-header">
      <p>{title}</p>
      {closable && (
        <span onClick={onCancel}>
          <Icon name="close" />
        </span>
      )}
    </div>
  );
};
const renderFooter = (props: IfooterProps) => {
  const { confirmLoading, cancelText, okText, okType, footer, onOk, onCancel } = props;
  if (footer) {
    return <div className="topC-modal-footer">{footer}</div>;
  }

  return (
    <div className="topC-modal-footer">
      <Button onClick={onCancel}>{cancelText}</Button>
      <Button type={okType} loading={confirmLoading} htmlType="submit" onClick={onOk}>
        {okText}
      </Button>
    </div>
  );
};

const Modal = (props: Iprops) => {
  const {
    visible,
    closable,
    title = "",
    header = null,
    confirmLoading,
    cancelText,
    okText,
    okType,
    footer,
    children,
    onCancel,
    onOk
  } = props;
  return (
    <CreateModal visible={visible}>
      <div className="topC-modal-warpper">
        <div
          className={classnames("topC-modal", {
            "topC-modal-center": closable
          })}>
          {renderHeader({
            title,
            header,
            closable,
            onCancel
          })}
          <div className="topC-modal-body">{children}</div>
          {renderFooter({
            confirmLoading,
            cancelText,
            okText,
            okType,
            footer,
            onCancel,
            onOk
          })}
        </div>
      </div>
    </CreateModal>
  );
};
Modal.propTypes = {
  width: PropTypes.number,
  zIndex: PropTypes.number,
  closable: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  cancelText: PropTypes.node,
  okText: PropTypes.node,
  okType: PropTypes.string,
  title: PropTypes.node,
  visible: PropTypes.bool
};
Modal.defaultProps = {
  closable: true,
  confirmLoading: false,
  cancelText: "取 消",
  okText: "确 定",
  okType: "primary",
  title: "标题",
  visible: false
};
export default Modal;
