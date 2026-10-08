import type { FormFieldConfig } from "@/components/ui/FormField";

export type ContactBlock = {
  label: string;
  phone?: string;
  phoneHref?: string;
  address: string;
};

export const contactInquiryContent = {
  eyebrow: "Get in touch",
  titleLines: [
    [{ text: "Tell us what" }],
    [{ text: "You " }, { text: "Need", accent: true }, { text: " made." }],
  ] satisfies { text: string; accent?: boolean }[][],
  description:
    "For custom sportswear manufacturing, development, sourcing, or partnership inquiries, send the details below. Keep it direct we'll take it from there.",
  contacts: [
    {
      label: "Manufacturer Factory",
      phone: "+92 300-9617111",
      phoneHref: "tel:+923009617111",
      address: "Wazirabad Rd. Harrar, Sialkot, Punjab, (51310), Pakistan",
    },
    {
      label: "Corporate Office",
      phone: "+372-641-0438",
      phoneHref: "tel:+3726410438",
      address:
        "Harju Maakond, Tallinn, Kesklinna Linnaosa, Pärnu mnt, 139e/2-8, 11317, Estonia",
    },
    {
      label: "Headquarters",
      address: "6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
    },
  ] satisfies ContactBlock[],
  form: {
    // Until a backend is connected the form opens the visitor's email app
    recipient: "sales@superaceinternational.com",
    subject: "New inquiry from superaceinternational.com",
    submit: "Send a Request",
    note: "We reply within one working day. Your details are used to quote your order and nothing else.",
    fields: [
      {
        name: "name",
        label: "Your name",
        placeholder: "Who are we speaking to",
        required: true,
      },
      { name: "brand", label: "Club, gym or brand", placeholder: "Optional" },
      {
        name: "email",
        label: "Email",
        placeholder: "name@example.com",
        type: "email",
        required: true,
      },
      {
        name: "whatsapp",
        label: "WhatsApp number",
        placeholder: "Including country code",
        type: "tel",
        hint: "Fastest way to send photos of your sample.",
      },
      {
        name: "line",
        label: "Product line",
        placeholder: "Choose a line",
        type: "select",
        required: true,
        options: [
          "Teamwear",
          "Fitness & Training",
          "Sports Apparel",
          "Combat Sports",
          "Uniforms",
          "Other",
        ],
      },
      { name: "quantity", label: "Quantity", placeholder: "Pieces per design" },
      {
        name: "country",
        label: "Destination country",
        placeholder: "Where the order ships",
        required: true,
      },
      {
        name: "customisation",
        label: "Customisation",
        placeholder: "Sublimation, embroidery, your own labels",
      },
      {
        name: "message",
        label: "What do you need made",
        placeholder:
          "Garment, colours, sizes, decoration and the date you need it by.",
        type: "textarea",
        required: true,
        full: true,
        hint: "A link to a photo or a comparable product helps more than a paragraph.",
      },
    ] satisfies FormFieldConfig[],
  },
};