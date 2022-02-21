import Header from "../components/header";
const DashBoard = {
  async render () {      
        return `
        ${await Header.render()}
        <div class="content w-[1600px] bg-[#80b435]">
          <div class="dashboard w-[1170px] mx-auto py-[10px] ">
              <ul class="flex justify-center" >
                <li class="pr-[20px]"><a class="uppercase text-white hover:border-b-2 border-solid" href="">Trang chủ</a></li>
                <li class="pr-[20px]"><a class="uppercase text-white hover:border-b-2 border-solid" href="/admin/news/add">Thêm sản phẩm</a></li>
                <li class="pr-[20px]"><a class="uppercase text-white hover:border-b-2 border-solid" href="/admin/news">Tất cả sản phẩm</a></li>
                <li class="pr-[20px]"><a class="uppercase text-white hover:border-b-2 border-solid" href="">Trang chủ</a></li>
              </ul>
          </div>
      </div>
        `;
    }
}
export default DashBoard;