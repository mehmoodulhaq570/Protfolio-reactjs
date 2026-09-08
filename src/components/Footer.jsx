import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="site-footer"><Link className="brand" to="/">MH<span>.</span></Link><p>© {new Date().getFullYear()} Mehmood Ul Haq</p><Link to="/#contact">Research. Build. Collaborate. ↗</Link></footer>;
}
