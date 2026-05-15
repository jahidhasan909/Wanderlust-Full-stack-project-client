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
                <Button className={'rounded-md text-[#b38b6d] border-[#b38b6d]'} variant='outline'><MdEditLocationAlt /> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md md:max-w-3xl rounded-md border bg-[#272738af] border-white/20">
                            <Modal.CloseTrigger />
                            <Modal.Header>

                                <Modal.Heading className='flex items-center gap-1 font-bold text-xl text-white'><span className='text-[#b38b6d]'><MdEditLocationAlt /></span> Update Travel Package</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="" className='bg-[#272738af]'>
                                    <form

                                        onSubmit={onSubmit}
                                        className="p-10 space-y-8"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                    <Label className='text-white'>Destination Name</Label>
                                                    <Input placeholder="Bali Paradise" className="rounded-md text-white bg-[#272738] border border-white/20" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField defaultValue={country} name="country" isRequired>
                                                <Label className='text-white'>Country</Label>
                                                <Input placeholder="Indonesia" className="rounded-md text-white bg-[#272738af] border border-white/20" />
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
                                                    <Label className='text-white'>Category</Label>
                                                    <Select.Trigger className="rounded-md bg-[#272738af] text-white border border-white/20">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover className={'bg-[#272738] border border-white/20 text-white'}>
                                                        <ListBox>
                                                            <ListBox.Item id="Beach" textValue="Beach" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                                                Beach
                                                                <ListBox.ItemIndicator className='text-white'/>
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Mountain" textValue="Mountain" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                                                Mountain
                                                                <ListBox.ItemIndicator className='text-white'/>
                                                            </ListBox.Item>
                                                            <ListBox.Item id="City" textValue="City" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                                                City
                                                                <ListBox.ItemIndicator className='text-white'/>
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Adventure" textValue="Adventure" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                                                Adventure
                                                                <ListBox.ItemIndicator className='text-white'/>
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Cultural" textValue="Cultural" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                                                Cultural
                                                                <ListBox.ItemIndicator className='text-white'/>
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Luxury" textValue="Luxury" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                                                Luxury
                                                                <ListBox.ItemIndicator className='text-white'/>
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField defaultValue={price} name="price" type="number" isRequired>
                                                <Label className='text-white'>Price (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-md bg-[#272738af] border text-white border-white/20"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField defaultValue={duration} name="duration" isRequired>
                                                <Label className='text-white'>Duration</Label>
                                                <Input
                                                    placeholder="7 Days / 6 Nights"
                                                    className="rounded-md bg-[#272738af] border text-white border-white/20"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                                    <Label className='text-white'>Departure Date</Label>
                                                    <Input type="date" className="rounded-md text-white bg-[#272738af] border border-white/20" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                                                    <Label className='text-white'>Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-md text-white bg-[#272738af] border border-white/20"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField className={''} defaultValue={description} name="description" isRequired>
                                                    <Label className='text-white'>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-md text-white h-[80px] bg-[#272738af] border border-white/20"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        {/* Buttons */}


                                        <Button
                                            type="submit"
                                            variant="outline"

                                            className=" w-full rounded-md bg-linear-to-r from-[#b38b6d] to-[#af8068] text-white"
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