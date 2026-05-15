
import { TrashBin } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import BookingAlertDelete from "../AlertDiloag/BookingAlertDelete";

const UserBookingDataCard = ({ bookingData }) => {
    return (
        <div>
            <Card className="w-full rounded-md items-stretch md:flex-row bg-[#272738af] border border-white/20" >
                <div className="relative h-[140px] w-full shrink-0 overflow-hidden  sm:h-[150px] sm:w-[300px]">
                    <Image
                        alt="booking img"
                        className="rounded-md absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        src={bookingData.imageUrl}
                        width={300}
                        height={150}
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1 flex flex-row justify-between items-center p-2">
                        <div className=" space-y-2">
                            <Card.Title className="font-bold text-2xl text-white">{bookingData.destinationName}</Card.Title>

                            <div className=" space-y-1 text-gray-400">
                                <p className="text-xs">Departure : {new Date(bookingData.departureDate).toLocaleDateString(
                                    new Intl.DateTimeFormat('en-US', {
                                        dateStyle: 'long'
                                    })
                                )}</p>
                                <p className="text-xs text-zinc-400">Booking ID : {bookingData._id}</p>
                            </div>


                            <h2 className="font-semibold text-[#b38b6d] text-2xl">${bookingData.price}</h2>

                        </div>
                        <BookingAlertDelete bookingData={bookingData}></BookingAlertDelete>
                    </Card.Header>
                </div>
            </Card>
        </div>
    );
};

export default UserBookingDataCard;