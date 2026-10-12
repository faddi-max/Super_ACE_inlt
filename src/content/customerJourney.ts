import step01 from "@/assets/images/journey/step-01.png";
import step02 from "@/assets/images/journey/step-02.png";
import step03 from "@/assets/images/journey/step-03.png";
import step04 from "@/assets/images/journey/step-04.png";
import step05 from "@/assets/images/journey/step-05.png";
import step06 from "@/assets/images/journey/step-06.png";
import step07 from "@/assets/images/journey/step-07.png";
import step08 from "@/assets/images/journey/step-08.png";
import step09 from "@/assets/images/journey/step-09.png";
import step10 from "@/assets/images/journey/step-10.png";
import step11 from "@/assets/images/journey/step-11.png";

export type JourneyStep = {
  number: string;
  title: string;
  image: string;
};

export const journeyContent = {
  titleLead: "Customer",
  titleAccent: "Journey.",
  description:
    "From the first inquiry to worldwide delivery, every stage is organized into a clear production journey so clients can understand what happens before, during and after manufacturing.",
  flowLabel: "Production flow:",
  flow: [
    "Design & Development",
    "Fabric Selection",
    "Pattern Making",
    "Cutting",
    "Printing & Embellishment",
    "Stitching",
    "Quality Inspection",
    "Packing & Shipment",
  ],
  tag: "Worldwide delivery",
  prevLabel: "Previous steps",
  nextLabel: "Next steps",
  steps: [
    { number: "01", title: "Inquiry Received", image: step01 },
    { number: "02", title: "Share Your Design", image: step02 },
    { number: "03", title: "Design Approval", image: step03 },
    { number: "04", title: "Confirm Materials", image: step04 },
    { number: "05", title: "Sample Development", image: step05 },
    { number: "06", title: "Sample Production", image: step06 },
    { number: "07", title: "Sample Approval", image: step07 },
    { number: "08", title: "Start Bulk Production", image: step08 },
    { number: "09", title: "Quality Checking", image: step09 },
    { number: "10", title: "Packaging", image: step10 },
    { number: "11", title: "Worldwide Delivery", image: step11 },
  ] satisfies JourneyStep[],
};