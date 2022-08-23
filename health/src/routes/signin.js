function Signin() {

  /**
   *  @todo 실행이 되어야 하는데 되지 않는다 이유가 뭘까..?
   */

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  return (
    <>
      <button href={KAKAO_AUTH_URL}> 카카오로 로그인 하기 </button>
    </>
  );
}

export default Signin;
