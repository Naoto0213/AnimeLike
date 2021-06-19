import { withAuthenticator } from "@aws-amplify/ui-react";
import PrimaryButton from "../components/UI/button/PrimaryButton";

function Login() {
  return (
    <div className=" bg-gray-100 h-screen px-16 py-10">
      <div className="flex flex-col items-center mt-16 bg-white py-8">
        <p className="inline-block blackFont text-2xl border-b-2 border-yellow-500 ">
          アカウント登録完了
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-yellow-500 mt-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="blackFont mt-4 mb-6">ログインが完了しました</p>
        <PrimaryButton link="/">ホームに戻る</PrimaryButton>
      </div>
    </div>
  );
}

export default withAuthenticator(Login);
