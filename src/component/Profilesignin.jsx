import React from 'react'
import logo from '../images/logo.png'
import { Button, Form, Input, InputNumber, Select } from 'antd';

const Profilesignin = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const { Option } = Select;

    const min = 18;
    const max = 35;

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+91</Option>
                <Option value="87">+1</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values) => {
        console.log(values);
    };


    return (
        <div className='Login'>
            <div className='optionblock'>
                <div className="profileHead">
                    <img className='jobseekerImg' src={logo} alt="" />
                    <h1 className='logoName'>HireStorm</h1>
                </div>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    validateMessages={validateMessages}
                >   
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'name']}
                        label="Skill"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'age']}
                        label="Age"
                        rules={[
                            {
                                type: 'number',
                                min: 18,
                                max: 35,
                            },
                        ]}
                    >
                        <InputNumber placeholder='(18 - 35)' />
                    </Form.Item>


                    <Form.Item
                        name={['user', 'exp']}
                        label="Experience"
                        rules={[
                            {
                                type: 'number',
                                min: 0,
                                max: 15,
                            },
                        ]}
                    >
                        <InputNumber placeholder='(0 - 15)' />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>


                    <Form.Item name={['user', 'website']} label="Domain">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Profilesignin