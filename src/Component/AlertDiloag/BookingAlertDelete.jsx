"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

import { toast } from "react-toastify";

const BookingAlertDelete = ({ bookingData }) => {




    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5001/booking/${bookingData?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()
        if (data) {
            toast.warning('Booking Delete ! ')
            window.location.reload()
        }


    }


    return (
        <div>
            <AlertDialog>
                <Button className="w-full sm:w-auto rounded-md text-red-400 border-red-400" variant="outline" ><TrashBin></TrashBin> Cancel</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px] rounded-md">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Footer>
                                <Button className={'rounded-md'} slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} className={'rounded-md'} variant="danger">
                                    Delete Booking
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingAlertDelete;