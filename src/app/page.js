import Banner from "@/Component/Banner/Banner";
import AppendDots from "@/Component/FeaturedDestination/FeatureDestinationSilder";
import FeaturedDestinationCardSilder from "@/Component/FeaturedDestination/FeatureDestinationSilder";
import ReadyToTrip from "@/Component/ReadyToTrip/ReadyToTrip";
import TravelarsSay from "@/Component/TravelarsSay/TravelarsSay";
import TravelJournal from "@/Component/TravelJournal/TravelJournal";
import WhyChoose from "@/Component/WhyChoose/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
     <AppendDots></AppendDots>
     <WhyChoose></WhyChoose>
     <TravelarsSay></TravelarsSay>
     <TravelJournal></TravelJournal>
     <ReadyToTrip></ReadyToTrip>
    </div>
  );
}
