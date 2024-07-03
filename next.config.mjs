import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  swSrc: 'service-worker.js',
});

export default withPWA({
 
    // reactStrictMode: true,
    images: {
      unoptimized: true,
    }
});
