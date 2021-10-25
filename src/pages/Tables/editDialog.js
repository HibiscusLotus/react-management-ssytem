/**
 * 提示框
 */

import React, { Component } from 'react';
import { Input, Modal, Form } from 'antd';

class EditDialog extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:this.props.form
        }
    }
    handleChange(param, e) {
        const form = {...this.state.form};
        form[param] = e.target.value;
        this.setState({
            form
        })
    }
    render() {
        return (
            this.props.visible && <Modal
                title="编辑"
                visible={true}
                onCancel={() => { this.props.onCancel() }}
                onOk={() => { this.props.onSure(this.state.form) }}
            >
                <Form labelCol={{ span: 2 }} wrapperCol={{ span: 20 }}>
                    <Form.Item label="姓名">
                        <Input value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />
                    </Form.Item>
                    <Form.Item label="地址">
                        <Input value={this.state.form.address} onChange={this.handleChange.bind(this, 'address')} />
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default EditDialog;