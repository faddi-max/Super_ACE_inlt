export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

const placeholder =
  "Placeholder testimonial. Replace with approved client feedback about development, sampling and delivery.";

export const testimonialsContent = {
  eyebrow: "Global Partner Feedback",
  title: "Client Testimonials",
  description:
    "Real feedback from brands and partners working with Super Ace across international markets.",
  labelLeft: "Client Voice",
  labelRight: "Super Ace / 2026",
  items: [
    {
      quote:
        "From initial development to final delivery, the team kept communication clear and the production process consistent.",
      name: "David Kim",
      role: "Brand Director · Pacific Brands",
      location: "Sydney · Australia",
    },
    {
      quote: placeholder,
      name: "Client Name",
      role: "Title · Company",
      location: "City · Country",
    },
    {
      quote: placeholder,
      name: "Client Name",
      role: "Title · Company",
      location: "City · Country",
    },
    {
      quote: placeholder,
      name: "Client Name",
      role: "Title · Company",
      location: "City · Country",
    },
    {
      quote: placeholder,
      name: "Client Name",
      role: "Title · Company",
      location: "City · Country",
    },
  ] satisfies Testimonial[],
};