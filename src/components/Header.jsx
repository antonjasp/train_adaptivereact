export function Header() {
  return (
    <>
      <header>
        <div className="logo-header">
          <ul>
            <li className="aws">AWS</li>
            <li className="air">Air Workshop</li>
          </ul>
        </div>
        <div className="contact-header">
          <img src="images/contact.png" alt="" width="60px" height="60px" />
          <ul className="contact-header-info">
            <li>+38(096)-027-24-43</li>
            <li>Пн-Нд 10:00-19:00</li>
            <li>м.Дніпро</li>
          </ul>
        </div>
      </header>
    </>
  );
}
