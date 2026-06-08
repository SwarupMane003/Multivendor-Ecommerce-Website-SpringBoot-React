import { Button, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Contact = () => {
  return (
    <main>
      <section className="brand-section">
        <div className="brand-section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="brand-kicker">Contact</p>
            <h1 className="brand-title text-4xl md:text-6xl mt-4">
              We are here for orders, sellers, and marketplace support.
            </h1>
            <p className="brand-copy text-lg mt-6">
              Send a message for seller onboarding, order questions, catalogue help, or admin support.
            </p>

            <div className="grid gap-4 mt-8">
              <div className="brand-card p-5 flex gap-4">
                <EmailIcon className="text-pink-700" />
                <div>
                  <h2 className="font-extrabold">Email</h2>
                  <p className="brand-copy text-sm">support@shopsphere.local</p>
                </div>
              </div>
              <div className="brand-card p-5 flex gap-4">
                <ScheduleIcon className="text-pink-700" />
                <div>
                  <h2 className="font-extrabold">Hours</h2>
                  <p className="brand-copy text-sm">Monday to Saturday, 10 AM to 7 PM</p>
                </div>
              </div>
              <div className="brand-card p-5 flex gap-4">
                <LocationOnIcon className="text-pink-700" />
                <div>
                  <h2 className="font-extrabold">Location</h2>
                  <p className="brand-copy text-sm">India based marketplace operations</p>
                </div>
              </div>
            </div>
          </div>

          <form className="brand-panel rounded-lg p-6 md:p-8">
            <div className="grid gap-5">
              <TextField label="Full name" fullWidth />
              <TextField label="Email address" type="email" fullWidth />
              <TextField label="Topic" fullWidth />
              <TextField label="Message" multiline minRows={5} fullWidth />
              <Button className="brand-button" variant="contained" size="large">
                Send Message
              </Button>
              <p className="text-xs text-gray-500">
                This form is ready for UI use. Connect it to a backend endpoint when contact submissions are added.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
