function FooterIcon({ children, tip }) {
  console.log(tip);
  return (
    <div className="footer-icon-wrapper">
      {children}
      <div className="footer-tooltip">{tip}</div>
    </div>
  );
}

export default FooterIcon;
