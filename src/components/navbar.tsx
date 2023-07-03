export function Navbar(){
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blue-700"><strong>Teach</strong>Me.lk
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blue-800">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blue-800">Sign-up</li>
      </div>
    </div>
  )
}

