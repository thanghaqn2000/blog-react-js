import './Sidebar.scss'
import chart_img from "../../../assets/images/chart.png";

function Sidebar() {
  return (
    <div className="col-lg-4 border-2 border-zinc-700">
      <div className="sidebar mt-3">
        <div className="row">
          <div className="col-lg-12 chart-perfomance">
            <div className="sidebar-heading">
              <h2>Hiệu suất danh mục đầu tư<br/>
                <span>(Cập nhật hàng tuần)</span>
              </h2>
            </div>
            <div className="chart-perfomance">
              <img src={chart_img} alt="" />
            </div>
          </div>
          <div className="col-lg-12 ranking">
            <div className="sidebar-item recent-posts">
              <div className="sidebar-heading">
                <h2>Xếp hạng cổ phiếu</h2>
              </div>
              <div className="content">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                              Hạng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tên cổ phiếu
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Giá
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                FPT
                            </td>
                            <td className="px-6 py-4">
                                200.000 VND
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                FPT
                            </td>
                            <td className="px-6 py-4">
                                200.000 VND
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                FPT
                            </td>
                            <td className="px-6 py-4">
                                200.000 VND
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Sidebar;
