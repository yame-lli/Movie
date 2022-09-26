import { IForm } from '@/components/LoginRegisterForm/type'

const formItems: IForm = {
    formItems: [{
        field: 'username',
        type: 'input',
        label: '账号',
        rules:[ { required: true, message: "Please input username", trigger: "blur" },]
    }, {
        field: 'password',
        type: 'password',
        label: '密码',
        rules:[ { required: true, message: "Please input psaaword", trigger: "blur" },]
    },]
}

export default formItems