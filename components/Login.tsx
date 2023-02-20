import { ButtonHTMLAttributes, ReactNode } from "react";

const LoginButton = (
  // buttonのすべての型 & ReactNode(reactの文字列)
  // button要素に元々childrenは含まれないため、あらかじめ分割代入で取り出す
  { children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> &
  { children: ReactNode; }
) => {
  // このpropsは<button>要素をすべて子要素に渡す
  return <button {...props}>{children}</button>
}

export default LoginButton