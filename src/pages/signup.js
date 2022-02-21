import {signup} from "../api/user"
import Header from "../components/header";
const SignUp = {
  async  render() {
        return `
        ${await Header.render()}
        <div class="account w-[456px] mx-auto  bg-[#fff] font-serif	my-[20px]	rounded-[20px] ">
          <div class="btn bg-[#fafafa] flex justify-between items-center h-[60px] px-[45px] font-bold rounded-t-[20px]">
            <h4 class="font-thin"><a href="/#/signin">ĐĂNG NHẬP</a></h4>
            <h4 ><a  href="/#/signup">ĐĂNG KÝ</a></h4>
          </div>
          <div class="form shadow-lg rounded-[20px]">
            <form action="" id="form-reg">
              <div class="forms flex flex-col p-[20px] ">
              <input type="text" placeholder="User" class="my-[10px] rounded-[20px] p-[5px] border-[1px] border-solid" name="" id="username">
                <input type="email" placeholder="Email" class="rounded-[20px] p-[5px] border-[1px] border-solid" name="" id="email">
              <input type="password" placeholder=".............." class="my-[10px] rounded-[20px] p-[5px] font-bold border-[1px] border-solid" name="" id="password">
              <button class="bg-[#c70808] rounded-[20px] h-[45px] text-white w-[100%]">ĐĂNG KÝ</button>
              <span id="result"></span>
              </div>
            </form>
          </div>
      </div>
        `;
    },
    afterRender() {
      const formreg = document.querySelector("#form-reg");
        formreg.addEventListener('submit', async (e) => {
          e.preventDefault();
          try {
            const response =  signup({
              username: document.querySelector("#username").value,
              email: document.querySelector("#email").value,
              password: document.querySelector("#password").value,
            })
            
          } catch (error) {
            console.log(error.response.data);
          }
        })
    }
}
export default SignUp;