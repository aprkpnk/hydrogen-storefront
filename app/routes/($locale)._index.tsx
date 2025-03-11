import {Link} from '@remix-run/react';

export default function Homepage() {
  return (
    <>
      <Link aria-label="All Products" to="/collections/all">
        Collection Page
      </Link>
    </>
  );
}
