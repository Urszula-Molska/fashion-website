import sprite from "../assets/sprite.svg";

export const Navigation = () => {
  const toggleBtn = () => {
    const mobileMenuIcon = document.getElementById("mobile-menu-button");

    if (mobileMenuIcon.classList.contains("open")) {
      mobileMenuIcon.classList.remove("open");
    } else {
      mobileMenuIcon.classList.add("open");
    }
  };

  return (
    <>
      <div className="bg-bg_green200 ">
        <div className="mx-auto 2xl:w-[1377px] w-full bg-bg_green200 mob:max-w-[570px]">
          <header className="flex items-center justify-between pb-[80px] 2xl:pb-[128px] pt-[54px] h-[52px] tab:w-[768px] ">
            <div className="font-elephant mob:text-[32px] text-[40px] text-green800  2xl:mr-[377px]">
              Rivo
            </div>
            <nav className=" mob:hidden 2xl:mr-[184px] ">
              <ul className="flex font-poppins 2xl:text-[22px] tab: text-[18px] text-green800 font-medium tab:gap-6 ">
                <li className="2xl:mr-[57px] cursor-pointer">HOME</li>
                <li className="2xl:mr-[52px] cursor-pointer">SHOP</li>
                <li className="2xl:mr-[47px] cursor-pointer">FEATURES</li>
                <li className="cursor-pointer">CONTACT</li>
              </ul>
            </nav>
            <div className="flex items-center h-[50px] gap-3 ">
              <button
                className=" tab&2xl:hidden cursor-pointer font-poppins  mob:text-[18px] text-[20px] text-green800 text-center border-green800  
              tab&2xl:w-[142px] tab&2xl:h-[52px] border-2 rounded-[3px] font-medium px-6 py-[3px] "
              >
                LOGIN
              </button>
              <div className="2xl:mr-[57px] h-[32px] w-[32px]  ">
                <svg className="w-full h-full pt-[3px] cursor-pointer mob:mt-[2px]">
                  <use href={`${sprite}#icon-suitcase`}></use>
                </svg>
              </div>
              {/* button */}
              <div className="block tab&2xl:hidden cursor-pointer mt-2">
                <button
                  id="mobile-menu-button"
                  class="group peer"
                  onClick={() => toggleBtn()}
                >
                  <div className="group-open:rotate-45 group-open:top-2 relative bg-green800 rounded-full w-8 h-1 transition-all"></div>
                  <div className=" bg-green800 rounded-full w-8 h-1 mt-1 group-open:opacity-0 opacity-100 transition-all"></div>
                  <div className="group-open:-rotate-45 group-open:-top-2 relative bg-green800 rounded-full w-8 h-1 mt-1 transition-all"></div>
                </button>
                <div className="absolute w-[150px] top-[80px] right-0 text-[18px] peer-open:block font-poppins bg-white/40 backdrop-blur transition-opacity opacity-100 hidden">
                  <div className="relative flex h-full cursor-pointer items-center justify-center  p-3 font-medium text-green-800  transition-colors hover:bg-green400 hover:text-white ">
                    <span>HOME</span>
                  </div>
                  <div className="relative flex h-full cursor-pointer items-center justify-center p-3 font-medium text-green-800  transition-colors hover:bg-green400 hover:text-white">
                    <span>SHOP</span>
                  </div>
                  <div className="relative flex h-full cursor-pointer items-center justify-center p-3 font-medium text-green-800  transition-colors hover:bg-green400 hover:text-white">
                    <span>FEATURES</span>
                  </div>
                  <div className="relative flex h-full cursor-pointer items-center justify-center p-3 font-medium text-green-800  transition-colors hover:bg-green400 hover:text-white">
                    <span>CONTACT</span>
                  </div>
                </div>
              </div>
              {/* end of button */}
              <button
                className="mob:hidden cursor-pointer font-poppins  mob:text-[18px] tab:text-[18px] text-[20px] text-green800 text-center border-green800  
              2xl:w-[142px] 2xl:h-[52px] border-2 rounded-[3px] font-medium px-6 py-[3px]"
              >
                LOGIN
              </button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};
export default Navigation;
