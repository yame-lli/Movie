import { IForm } from '@/components/LoginRegisterForm/type'

const formItems: IForm = {
    formItems: [{
        field: 'username',
        type: 'input',
        label: '账号',
        rules: [{ required: true, message: "Please input username", trigger: "blur" },]
    }, {
        field: 'password',
        type: 'password',
        label: '密码',
        rules: [{ required: true, message: "Please input psaaword", trigger: "blur" },]
    },

    {
        field: 'email',
        type: 'email',
        label: '邮箱',
        rules: [
            { required: true, message: "Please input email", trigger: "blur" },
            {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
            },]
    }]
}

export default formItems