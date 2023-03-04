
function NavBar () {
  const items = [{item: 'Status', selected: true},{item: 'Overview', selected: false},{item: 'Statistics', selected: false},{item: 'Controls', selected: false},{item: 'Options', selected: false}]
  const NavbarItems = items.map((i)=>{
    return <div className={(i.selected ? 'selected' : '') + ' nav-bar-item '}>{i.item}</div>
  })
  return <div className="nav-bar">
    {NavbarItems}
  </div>
  };

  export default NavBar;