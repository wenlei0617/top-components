import * as React from "react";
import Modal from "../../src/components/Modal";
import Button from "../../src/components/Button";
import "./modal.scss";

export const OpenModal = () => {
  const [isVisible, changeVisible] = React.useState(false);
  const showModal = () => {
    changeVisible(true);
  };
  const handleOk = () => {
    changeVisible(!isVisible);
  };
  const handleCanle = () => {
    changeVisible(!isVisible);
  };
  return (
    <>
      <Button onClick={showModal}>Open Modal</Button>
      <Modal visible={isVisible} title="Basic Modal" onOk={handleOk} onCancel={handleCanle}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const CustomizedFooter = () => {
  const [isVisible, changeVisible] = React.useState(false);
  const showModal = () => {
    changeVisible(true);
  };
  const handleOk = () => {
    changeVisible(!isVisible);
  };
  const handleCancel = () => {
    changeVisible(!isVisible);
  };
  const Footer = () => {
    return (
      <div className="topC-example-modal-customeFooter">
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>
      </div>
    );
  };
  return (
    <>
      <Button onClick={showModal}> Open Modal with customized footer</Button>
      <Modal visible={isVisible} footer={<Footer />} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const AsyncModal = () => {
  const [isVisible, changeVisible] = React.useState(false);
  const [confirmLoading, changeConfirmLoading] = React.useState(false);
  const [content, changeContent] = React.useState("Content of the modal");
  const showModal = () => {
    changeVisible(true);
  };
  const handleOk = () => {
    changeContent("The modal will be closed after two seconds");
    changeConfirmLoading(true);
    setTimeout(() => {
      changeVisible(!isVisible);
      changeContent("Content of the modal");
      changeConfirmLoading(false);
    }, 2000);
  };
  const handleCanle = () => {
    changeVisible(!isVisible);
  };
  return (
    <>
      <Button onClick={showModal}> Open Modal with async logic</Button>
      <Modal
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCanle}
        confirmLoading={confirmLoading}>
        <p>{content}</p>
      </Modal>
    </>
  );
};
