import { Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="brand-section">
        <div className="brand-section-inner grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="brand-kicker">About ShopSphere</p>
            <h1 className="brand-title text-4xl md:text-6xl mt-4">
              A sharper marketplace for modern shoppers and growing sellers.
            </h1>
            <p className="brand-copy text-lg mt-6 max-w-2xl">
              ShopSphere brings product discovery, seller onboarding, checkout, orders, coupons, wishlists, reviews, and admin controls into one connected multi-vendor platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="brand-button" variant="contained" onClick={() => navigate("/products/men")}>
                Start Shopping
              </Button>
              <Button className="brand-outline-button" variant="outlined" startIcon={<StorefrontIcon />} onClick={() => navigate("/become-seller")}>
                Become a Seller
              </Button>
            </div>
          </div>

          <div className="brand-panel rounded-lg p-6 md:p-8">
            <div className="grid gap-4">
              {[
                ["Curated Catalog", "Organized categories, search, product detail pages, and customer reviews help buyers move faster."],
                ["Seller Tools", "Sellers can manage products, orders, inventory, payouts, and account details from a dedicated dashboard."],
                ["Admin Control", "Admins can manage sellers, coupons, deals, home sections, and marketplace content from one place."],
              ].map(([title, text]) => (
                <div className="brand-card p-5" key={title}>
                  <h2 className="font-extrabold text-gray-950">{title}</h2>
                  <p className="brand-copy mt-2 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brand-dark-band brand-section">
        <div className="brand-section-inner grid gap-6 md:grid-cols-3">
          {[
            [LocalMallIcon, "Customer First", "Fast browsing, useful filters, saved wishlists, and order history."],
            [StorefrontIcon, "Seller Ready", "Clear workflows for onboarding, listing, fulfillment, and payments."],
            [VerifiedUserIcon, "Built for Trust", "OTP authentication, role-based access, reviews, and protected account pages."],
          ].map(([Icon, title, text]) => {
            const DisplayIcon = Icon as typeof LocalMallIcon;
            return (
              <div className="rounded-lg border border-white/10 bg-white/10 p-6" key={title as string}>
                <DisplayIcon className="text-pink-200" sx={{ fontSize: 36 }} />
                <h2 className="mt-5 text-xl font-extrabold">{title as string}</h2>
                <p className="mt-3 text-sm leading-7 text-pink-100">{text as string}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default About;
