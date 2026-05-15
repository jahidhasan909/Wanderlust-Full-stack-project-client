"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function AlertDelete({data}) {
       
    const{_id,destinationName}=data


    const handleDelete = async () => {
       const res = await fetch(`http://localhost:5001/destination/${_id}`, {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json'
                  },
              })
      
              const data = await res.json()
      
              if (data) {
                  toast.warning('Travel package is Delete !')
                  redirect('/destination')
              }
    }



    return (
        <AlertDialog>
            <Button className={'rounded-md text-red-400 border-red-400'} variant="outline"><TrashBin></TrashBin> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] border bg-[#272738af] border-white/20 rounded-md">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white">Delete package permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-gray-400">
                                This will permanently delete <strong className="font-bold text-[#b38b6d]">{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className={'rounded-md'} slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button  onClick={handleDelete} className={'rounded-md'} variant="danger">
                                Delete Package
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}