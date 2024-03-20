import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <meta property="og:image" content="/smartmumbailogo.png" />
      <meta property="og:image:alt" content="Mumbai Matka logo" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
      />
      <meta property="og:site_name" content="Smart Mumbai Matka" />
      <main className="max-w-[1440px] mx-auto sm:px-3 px-1 select-none">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
