import { signin } from "../api/user";
import Header from "../components/header";
const SignIn = {
  async  render() {
        return `
      ${await Header.render()}
        <div class="account w-[456px] mx-auto  bg-[#fff] font-serif	my-[20px]	rounded-[20px] ">
          <div class="btn bg-[#fafafa] flex justify-between items-center h-[60px] px-[45px] font-bold rounded-t-[20px]">
            <h4><a href="/#/signin">ĐĂNG NHẬP</a></h4>
            <p class="font-thin"><a  href="/#/signup">ĐĂNG KÝ</a></p>
          </div>
          <div class="form shadow-lg rounded-[20px]">
            <form action="" id="formlogin">
              <div class="forms flex flex-col p-[20px] ">
                <input type="email" placeholder="Email" class="rounded-[20px] p-[5px] border-[1px] border-solid" name="" id="email">
              <input type="password" placeholder=".............." class="my-[10px] rounded-[20px] p-[5px] font-bold border-[1px] border-solid" name="" id="password">
              <button class="bg-[#c70808] rounded-[20px] h-[45px] text-white w-[100%]">ĐĂNG NHẬP</button>
              </div>
            </form>
            <span class="ml-[20px]" id="ketqua"></span>
          </div>
      </div>
        `;
    },
    afterRender() {
      const formlogin = document.querySelector("#formlogin");
      const ketqua = document.querySelector("#ketqua");
      formlogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await signin({
              email: document.querySelector("#email").value,
              password: document.querySelector("#password").value,
            });
            ketqua.innerHTML = "Success";
            localStorage.setItem('user', JSON.stringify(response.data.user));
            if(response.data.user.email === "haibravex@gmail.com") {
              document.location.href="/admin/news";
            }else{
              document.location.href="/";
            }
        } catch (error) {
          ketqua.innerHTML = error.response.data;
        }
      });
    }
}
export default SignIn;