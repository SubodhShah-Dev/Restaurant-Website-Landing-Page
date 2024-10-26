function drawerToggler() {
  const menuDrawer = document.getElementById('menuDrawer');
  const drawerBackdrop = document.getElementById('backdrop');
  const [hamBar, closeBtn] = [
    document.getElementById('hamBar'),
    document.getElementById('closeBtn'),
  ];
  [hamBar, closeBtn].forEach((e) => {
    e.addEventListener('click', () => {
      menuDrawer.classList.toggle('-translate-x-full');
      drawerBackdrop.classList.toggle('hidden');
    });
  });
}

export default drawerToggler;
