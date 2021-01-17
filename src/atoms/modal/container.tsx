import React, { Component } from 'react';

import { Modal } from './container.styles';

interface Props {
  children: React.ReactNode;
  show: boolean;
  onClose?(): void;
}

interface State {}

class ModalComponent extends Component<Props, State> {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Modal>
        <div className='modal-child'>
          {this.props.children}
          {this.props.onClose ? (
            <button className='close-button' onClick={this.props.onClose}>
              X
            </button>
          ) : null}
        </div>
      </Modal>
    );
  }
}

export default ModalComponent;
