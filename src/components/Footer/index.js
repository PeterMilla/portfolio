import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Peter Nielsen.`}
    </span>
    <Link secondary className="footer__link" href="/humans.txt" target="_self">
      Crafted by yours truly
    </Link>
  </footer>
);

export default Footer;
