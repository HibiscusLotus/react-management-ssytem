import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import IconFont from '../../components/IconFont';
import styles from './index.module.css';
import { login } from '../../api/index';

class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props);
        return (
            <div className={styles.loginWrap}>
                <div className={styles.msLogin}>
                    <div className={styles.msTitle}>后台管理系统</div>
                    <Form className={styles.msContent}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input addonBefore={<IconFont type="anticon-lx-people" />} />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" addonBefore={<IconFont type="anticon-lx-lock" />} />
                                )
                            }
                        </Form.Item>
                        <div className={styles.loginBtn}>
                            <Button type="primary" onClick={this.onSubmit.bind(this)}>登录</Button>
                        </div>
                        <p className={styles.loginTips}>Tips : 用户名和密码随便填。</p>
                    </Form>
                </div>
            </div>
        )
    }
    onSubmit(e) {
        e.preventDefault();
        //测试代码
        localStorage.setItem("ms_username","admin");
        this.props.form.validateFields((err, values) => {
            if (!err) {
                login(values)
                    .then(response => {
                        console.log("111")
                        if (response.data.status) {
                            console.log(response.data.uid);
                            localStorage.setItem('ms_uuid', response.data.uid);
                            this.props.history.push('/main/dashboard');
                        } else {
                            message.error('用户名或密码错误!');
                            return false;
                        }
                    })
                    .catch(error => {
                        message.error('登录失败!');
                        return false;
                    })
            } else {
                message.error('登录失败!');
                return false;
            }
        });
    }
}

export default Form.create({ name: 'login' })(withRouter(Login));