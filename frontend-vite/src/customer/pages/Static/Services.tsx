import { Button } from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Inventory2Icon,
    title: "Marketplace Catalog",
    text: "Product categories, search, product details, images, inventory, discounts, ratings, and reviews.",
  },
  {
    icon: PaymentsIcon,
    title: "Orders and Payments",
    text: "Cart, checkout, coupons, order history, payment success handling, refunds, and seller revenue reporting.",
  },
  {
    icon: SupportAgentIcon,
    title: "Seller Operations",
    text: "Seller registration, account verification, product management, order handling, payouts, and transactions.",
  },
  {
    icon: AutoAwesomeIcon,
    title: "AI Assistance",
    text: "Customer chat support hooks and product assistance flows for a more helpful shopping journey.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="brand-section">
        <div className="brand-section-inner">
          <div className="max-w-3xl">
            <p className="brand-kicker">Services</p>
            <h1 className="brand-title text-4xl md:text-6xl mt-4">
              Everything needed to run a polished multi-vendor store.
            </h1>
            <p className="brand-copy text-lg mt-6">
              ShopSphere covers the customer storefront, seller dashboard, admin workflows, and marketplace support flows in one app.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mt-12">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="brand-card p-6 md:p-8" key={title}>
                <div className="h-12 w-12 rounded-lg bg-pink-50 text-pink-700 flex items-center justify-center">
                  <Icon />
                </div>
                <h2 className="text-xl font-extrabold mt-6 text-gray-950">{title}</h2>
                <p className="brand-copy mt-3">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section pt-0">
        <div className="brand-section-inner brand-dark-band rounded-lg p-8 md:p-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">Ready to sell on ShopSphere?</h2>
            <p className="text-pink-100 mt-3 max-w-2xl">
              Create your seller account and manage products, orders, inventory, and payments from the seller dashboard.
            </p>
          </div>
          <Button className="brand-button" variant="contained" onClick={() => navigate("/become-seller")}>
            Open Seller Flow
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
