import { User } from '@/types/User';
import { useForm } from 'react-hook-form'
import LoginButton from '../components/Login';




const Account = () => {
  const { register, handleSubmit } = useForm<User>()

  const submit = async (data: User) => {
    console.log(data);

  }
  return (
    <div>
      <h1>アカウント</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="username">ユーザーネーム</label>
          <input {...register("name", {
            required: "必須項目です",
            maxLength: {
              value: 50,
              message: "最大50文字です"
            }
          })} id="username" type="text" />
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>
          <input {...register("email", {
            required: "必須項目です",
            maxLength: 60,
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'メールアドレスの形式が不正です',
            },
          })} id="email" type="text" />
        </div>

        <div>
          <label htmlFor="password">パスワード</label>
          <input {...register("password", {
            required: "必須項目です",
            maxLength: {
              value: 50,
              message: "最大50文字です"
            }
          })} id="password" type="text" />
        </div>

        <LoginButton>アカウント作成</LoginButton>
      </form>
    </div>
  )
}

export default Account