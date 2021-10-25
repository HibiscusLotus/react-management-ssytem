import React from 'react'
import { withRouter } from "react-router-dom"
import { Form, Input, Button, message } from 'antd'
import IconFont from '../../components/IconFont'
import { login } from '../../api/index'
import './index.css'
import '../../mock/index'



function Login(props) {
    const { getFieldDecorator } = props.form
    function onSubmit(e) {
        e.preventDefault()
        //测试代码
        props.form.validateFields((err, values) => {
            if (!err) {
                login(values)
                    .then(res => {
                        if (res.status !== 1) {
                            message.error(res.message)
                            return false
                        }
                        localStorage.setItem('uname', res.body.uname)
                        localStorage.setItem('uuid',res.body.uuid)
                        props.history.push('/main/dashboard')
                    })
                    .catch(error => {
                        message.error('登录失败!')
                        return false
                    })
            } else {
                message.error('登录失败!')
                return false
            }
        })
    }
    return (
        <div className='loginWrap'>
            <div className='msLogin'>
                <div className='msTitle'>后台管理系统</div>
                <Form className='msContent'>
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
                    <div className='loginBtn'>
                        <Button type="primary" onClick={onSubmit}>登录</Button>
                    </div>
                    <p className='loginTips'>Tips : 用户名和密码随便填,用户名admin为管理用户。</p>
                </Form>
            </div>
        </div>
    )
}

export default Form.create({ name: 'login' })(withRouter(Login))