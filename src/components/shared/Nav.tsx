import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <li>
        <Link href="/" passHref>
          Home
        </Link>
      </li>
      <li>
        <Link href="/post" passHref>
          글쓰기
        </Link>
      </li>
      <style>{`
        nav {
          display: flex;
          margin: 10px;
        }
        li {
          list-style: none;
          margin-right: 1rem;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
