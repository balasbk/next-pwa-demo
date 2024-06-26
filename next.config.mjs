import createNextIntlPlugin from 'next-intl/plugin';
import withPWAInit from "next-pwa";

const withNextIntl = createNextIntlPlugin('./i18n.js');



const withPWA = withPWAInit({
  dest: "public",
});

 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withPWA(withNextIntl(nextConfig));