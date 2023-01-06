import Link from 'next/link'
import Fav from './product/FavouriteProducts'


export default function Home() {
  return (
    <ul>
      {/* <li>
        <Link href="/b" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/a" as="/b">
          <a>b</a>
        </Link>
      </li> */}
      <Fav/>
    </ul>
  )
}
