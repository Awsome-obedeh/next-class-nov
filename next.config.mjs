/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'images.unsplash.com',
    //         // pathname: '/photo-/**',  
    //       },
    //       {
    //         protocol: 'https',
    //         hostname: 'media.istockphoto.com',
    //         // pathname: '/photo-/**',
    //       },
    //     ],
    //   },
    // old pattern 
    domains:['media.istockphoto.com','images.unsplash.com','plus.unsplash.com']
}
};

export default nextConfig;
