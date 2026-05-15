'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import React, { useRef } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
import { toast } from 'react-toastify';

const AddDestination = () => {

    const formRef = useRef(null)


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newDestination = Object.fromEntries(formData.entries())

        const res = await fetch('http://localhost:5001/destination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDestination)
        })

        const data = await res.json()

        if (data) {
            toast.success('Add Destination successfully !')
        }

    }



    return (
        <div className=' container mx-auto mt-35 mb-20 '>
            <h1 className='font-bold text-3xl mb-5 mt-2 pl-20 text-white'>Add New Travel Package</h1>
            <Card className=' rounded-md shadow-md  bg-[#272738af] border border-white/20 max-w-7xl mx-auto'>
                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    className="p-10 space-y-8 "
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label className='text-white'>Destination Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-md bg-[#272738af] border border-white/20" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label className='text-white'>Country</Label>
                            <Input placeholder="Indonesia" className="rounded-md bg-[#272738af] border border-white/20" />
                            <FieldError />
                        </TextField>

                        {/* Category - Updated Select Component */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label className='text-white'>Category</Label>
                                <Select.Trigger className="rounded-md bg-[#272738af] border border-white/20">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className={'bg-[#272738f7] border border-white/20 text-white'}>
                                    <ListBox>
                                        <ListBox.Item id="Beach" textValue="Beach" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                            Beach
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Mountain" textValue="Mountain" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                            Mountain
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="City" textValue="City" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                            City
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Adventure" textValue="Adventure" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                            Adventure
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cultural" textValue="Cultural" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                            Cultural
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Luxury" textValue="Luxury" className=' hover:bg-[#272738] hover:border hover:border-white/20'>
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label className='text-white'>Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-md bg-[#272738af] border border-white/20"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label className='text-white'>Duration</Label>
                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-md bg-[#272738af] border border-white/20"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label className='text-white'>Departure Date</Label>
                                <Input type="date" className="rounded-md bg-[#272738af] border border-white/20 text-gray-400" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label className='text-white'>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-md bg-[#272738af] border border-white/20"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className='text-white'>Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-md bg-[#272738af] border border-white/20"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <div className='flex items-center gap-2'>
                        <Button onClick={
                            () => formRef.current.reset()
                        } variant='outline' className={'text-red-400 rounded-md border-red-400'}>
                            <RiDeleteBin6Line />
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="outline"

                            className=" rounded-md bg-linear-to-r from-[#b38b6d] to-[#af8068] text-white"
                        >
                            <FaWpforms />
                            Add Travel Package
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddDestination;