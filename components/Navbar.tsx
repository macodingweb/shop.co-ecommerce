import Image from "next/image"
import Link from "next/link"

interface NavTypes {
  logo: string,
  links: { url: string, text: string }[],
}

export default function Navbar({ logo, links } : NavTypes) {
  return (
    <nav>
      <div className="logo">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </div>
      <ul className="main-links">
        { links.length > 0 && links.map((ele, index) => (
          <li className="list-item" key={index}>
            <Link href={ele.url}></Link>
          </li>
        )) }
      </ul>
    </nav>
  )
}