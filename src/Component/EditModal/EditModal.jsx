"use client"
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from '@heroui/react';
import React from 'react';
import { MdEditLocationAlt } from 'react-icons/md';
import { CiSaveUp2 } from "react-icons/ci";
import { toast } from 'react-toastify';





const EditModal = ({ data }) => {


    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = data
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newDestination = Object.fromEntries(formData.entries())

        const res = await fetch(`http://localhost:5001/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDestination)
        })

        const data = await res.json()

        if (data) {
            toast.success('Update Travel package !')
         
        }



    }




    return (
        <div>
            <Modal className={''}>
                <Button className={'rounded-md border-gray-300'} variant='outline'><MdEditLocationAlt /> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md md:max-w-3xl rounded-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading className='flex items-center gap-1 font-bold text-xl'><MdEditLocationAlt /> Update Travel Package</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form

                                        onSubmit={onSubmit}
                                        className="p-10 space-y-8 "
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                    <Label>Destination Name</Label>
                                                    <Input placeholder="Bali Paradise" className="rounded-md" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField defaultValue={country} name="country" isRequired>
                                                <Label>Country</Label>
                                                <Input placeholder="Indonesia" className="rounded-md" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select
                                                    defaultValue={category}
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select category"
                                                >
                                                    <Label>Category</Label>
                                                    <Select.Trigger className="rounded-md">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Beach" textValue="Beach">
                                                                Beach
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Mountain" textValue="Mountain">
                                                                Mountain
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="City" textValue="City">
                                                                City
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Adventure" textValue="Adventure">
                                                                Adventure
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Cultural" textValue="Cultural">
                                                                Cultural
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                                Luxury
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField defaultValue={price} name="price" type="number" isRequired>
                                                <Label>Price (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-md"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField defaultValue={duration} name="duration" isRequired>
                                                <Label>Duration</Label>
                                                <Input
                                                    placeholder="7 Days / 6 Nights"
                                                    className="rounded-md"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-md" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                                                    <Label>Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-md"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={description} name="description" isRequired>
                                                    <Label>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-md h-[80px]"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        {/* Buttons */}


                                        <Button
                                            type="submit"
                                            variant="outline"

                                            className=" w-full rounded-md bg-cyan-500 text-white"
                                        >
                                            <CiSaveUp2 />
                                            Save Changes
                                        </Button>

                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModal;